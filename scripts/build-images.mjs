// Builds optimized portrait assets from the source photo in the project root.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
const SOURCE = 'pic.png';
mkdirSync(OUT, { recursive: true });

const { data: source, info } = await sharp(SOURCE).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
const background = new Uint8Array(width * height);
const queue = new Int32Array(width * height);
let head = 0;
let tail = 0;

const isBlack = (i) => Math.max(source[i * 3], source[i * 3 + 1], source[i * 3 + 2]) <= 4;
const addBackgroundPixel = (x, y) => {
  const pixel = y * width + x;
  if (!background[pixel] && isBlack(pixel)) {
    background[pixel] = 1;
    queue[tail++] = pixel;
  }
};

for (let x = 0; x < width; x++) {
  addBackgroundPixel(x, 0);
  addBackgroundPixel(x, height - 1);
}
for (let y = 1; y < height - 1; y++) {
  addBackgroundPixel(0, y);
  addBackgroundPixel(width - 1, y);
}

while (head < tail) {
  const pixel = queue[head++];
  const x = pixel % width;
  const y = (pixel - x) / width;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) addBackgroundPixel(nx, ny);
    }
  }
}

const rgba = Buffer.alloc(width * height * 4);
for (let pixel = 0; pixel < width * height; pixel++) {
  const rgbIndex = pixel * 3;
  const rgbaIndex = pixel * 4;
  let alpha = background[pixel] ? 0 : 255;
  if (!background[pixel]) {
    const touchesBackground =
      (pixel % width > 0 && background[pixel - 1]) ||
      (pixel % width < width - 1 && background[pixel + 1]) ||
      (pixel >= width && background[pixel - width]) ||
      (pixel < width * (height - 1) && background[pixel + width]);
    if (touchesBackground) {
      const brightness = Math.max(source[rgbIndex], source[rgbIndex + 1], source[rgbIndex + 2]);
      if (brightness < 60) alpha = Math.round(((brightness - 4) / 56) * 255);
    }
  }
  rgba[rgbaIndex] = alpha ? Math.min(255, Math.round((source[rgbIndex] * 255) / alpha)) : 0;
  rgba[rgbaIndex + 1] = alpha ? Math.min(255, Math.round((source[rgbIndex + 1] * 255) / alpha)) : 0;
  rgba[rgbaIndex + 2] = alpha ? Math.min(255, Math.round((source[rgbIndex + 2] * 255) / alpha)) : 0;
  rgba[rgbaIndex + 3] = alpha;
}
const cutout = sharp(rgba, { raw: { width, height, channels: 4 } });

for (const w of [768, 720, 420]) {
  await cutout.clone()
    .resize({ width: Math.min(w, width) })
    .webp({ quality: 86, alphaQuality: 90 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await cutout.clone().resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="104" fill="#f4f1ec" letter-spacing="4">POOVARASAN</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">ML &amp; WEB DEVELOPER • PYTHON • JAVA</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
