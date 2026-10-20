/**
 * Central portfolio data — generated from Poovarasan's resume (711524BCS117_S_POOVARASAN.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Poovarasan S',
  displayName: 'Poovarasan S',
  firstName: 'POOVARASAN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A POOVARASAN ORIGINAL',
  role: 'ML & Web Developer',
  tagline: ['Machine Learning', 'Web Development', 'Python'],
  intro:
    'A B.E. Computer Science and Engineering student (CGPA 7.91) building machine learning projects in Python and responsive web pages with HTML, CSS and JavaScript — and solving problems daily on LeetCode, CodeChef and Codeforces.',
  location: 'Coimbatore',
  email: 'kit28.24cs117@gmail.com',
  phone: '8778931271',
  links: {
    linkedin: 'https://linkedin.com/in/poovarasans21',
    github: 'https://github.com/poovarasansiva21',
  },
  resumePdf: '/assets/Poovarasan_S_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-768.webp 768w',
    alt: 'Portrait of Poovarasan S',
  },
  interests: ['Machine Learning', 'Web Development', 'Competitive Programming'],
};

export const codingPlatforms = [
  { label: 'LeetCode', href: 'https://leetcode.com/' },
  { label: 'CodeChef', href: 'https://www.codechef.com/' },
  { label: 'Codeforces', href: 'https://codeforces.com/' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/' },
  { label: 'Codolio', href: 'https://codolio.com/' },
];

export const education = [
  {
    school: 'Kalaignarkarunanidhi Institute of Technology',
    place: 'Coimbatore',
    degree: 'B.E. Computer Science and Engineering',
    period: '2024 – 2028',
    score: 'CGPA 7.91',
  },
];

export const experience = [
  {
    company: 'Appin Technology',
    role: 'Web Development Intern',
    place: 'Coimbatore',
    period: 'One-month internship',
    points: [
      'Completed one-month internship building responsive web pages.',
      'Worked with HTML, CSS, JavaScript and basic backend integration.',
      'Improved debugging, UI design and project deployment skills.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'loan-approval',
    title: 'Loan Approval Prediction',
    year: '2026',
    genre: 'Machine Learning • Classification • Python',
    logline: 'A machine learning model that predicts loan approval outcomes from applicant financial data.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
    build: [
      'Built a machine learning model to predict loan approval outcomes based on applicant financial data, including income, credit history, loan amount and employment status.',
      'Implemented data preprocessing and feature engineering, including handling missing values, encoding categorical variables and scaling numerical features.',
      'Trained and compared multiple classification algorithms (Logistic Regression, Decision Tree, Random Forest) and tuned hyperparameters to achieve accurate predictions.',
      'Evaluated model performance using accuracy, precision, recall and confusion matrix to select the best-performing model.',
    ],
    features: [
      'Predicts approval from income, credit history, loan amount and employment status',
      'Missing-value handling, categorical encoding and feature scaling',
      'Logistic Regression, Decision Tree and Random Forest compared',
      'Hyperparameter tuning',
      'Accuracy, precision, recall and confusion matrix evaluation',
    ],
    metrics: [
      { value: '3', label: 'classification algorithms compared' },
      { value: '4', label: 'evaluation measures' },
      { value: '4', label: 'applicant data inputs' },
    ],
    github: 'https://github.com/poovarasansiva21/Loan-Approval-Prediction-Using-Machine-Learning',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'book-recommendation',
    title: 'Book Recommendation System',
    year: '2026',
    genre: 'Machine Learning • Recommender • Python',
    logline: 'A recommendation engine that suggests books from reading history and content similarity.',
    stack: ['Python', 'Machine Learning', 'Pandas', 'NumPy'],
    build: [
      'Built a book recommendation engine that suggests titles to users based on reading history and content similarity.',
      'Applied collaborative and content-based filtering techniques to generate personalized recommendations.',
      'Processed and cleaned large book rating datasets to improve recommendation accuracy and relevance.',
    ],
    features: [
      'Suggestions from reading history and content similarity',
      'Collaborative filtering',
      'Content-based filtering',
      'Cleaned large book rating datasets',
    ],
    metrics: [
      { value: '2', label: 'filtering techniques' },
      { value: '1', label: 'personalized recommender' },
    ],
    github: 'https://github.com/poovarasansiva21/Bookrecommendation',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'smart-traffic',
    title: 'Smart Traffic Management System',
    year: '2026',
    genre: 'Computer Vision • ML • IoT',
    logline: 'An intelligent traffic system that uses computer vision and ML to optimize signal timing in real time.',
    stack: ['Python', 'OpenCV', 'Machine Learning', 'IoT'],
    build: [
      'Designed an intelligent traffic management system using computer vision and ML algorithms to optimize traffic signal timing and reduce congestion in real time.',
      'Used OpenCV to process live video feeds from traffic cameras and detect and count vehicles at intersections.',
      'Built a machine learning model to dynamically adjust signal timings based on real-time traffic density rather than fixed intervals.',
      'Integrated IoT sensors to collect supplementary traffic data, improving the accuracy and responsiveness of signal control decisions.',
    ],
    features: [
      'Live video feeds processed with OpenCV',
      'Vehicle detection and counting at intersections',
      'Signal timing adjusted by real-time traffic density',
      'IoT sensors for supplementary traffic data',
    ],
    metrics: [
      { value: 'Real-time', label: 'signal timing control' },
      { value: '3', label: 'technologies combined: CV, ML, IoT' },
    ],
    github: 'https://github.com/poovarasansiva21/Smart-Traffic-Management-System',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'codolio',
    title: '1490 Questions Solved',
    org: 'Overall • Codolio',
    detail: '214 active days and 71 contests attended across coding platforms.',
    laurel: 'Competitive Coding',
  },
  {
    id: 'codechef',
    title: '1081 Problems Solved',
    org: 'CodeChef',
    detail: 'Max rating 1051, DSA rating 1355 (highest 1384), 45 contests attended. Global rank 127,400.',
    laurel: 'CodeChef',
  },
  {
    id: 'leetcode',
    title: '50 Days Badge 2026',
    org: 'LeetCode',
    detail: '353 problems solved with a contest rating of 1309. Top 96.42% globally.',
    laurel: 'LeetCode Badge',
  },
  {
    id: 'hackerrank',
    title: '2 Skill Badges',
    org: 'HackerRank',
    detail: 'Skill badges in C++ and Java, with an active programming profile.',
    laurel: 'Two Languages',
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    org: 'Online • Multiple',
    detail: 'Participated in numerous online hackathons, plus an active GitHub profile with academic and personal projects.',
    laurel: 'Participant',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'NPTEL', name: 'Programming in Java (Elite + Silver)', link: 'https://drive.google.com/file/d/1kqBlIUMB0Jlk5tHN6KbOv5v1qf9Qv4Kb/view?usp=drivesdk' },
  { issuer: 'Deloitte', name: 'Data Analytics Job Simulation', link: 'https://drive.google.com/file/d/11GgmJUoJq7vUPoETmSMoXDfMx60UJ6pF/view?usp=drivesdk' },
  { issuer: 'Infosys', name: 'Software Engineering', link: 'https://drive.google.com/file/d/154nKwaTzrUoipKjbakps-IzA2lPP1Sr3/view?usp=drivesdk' },
  { issuer: 'CCNA', name: 'Introduction to Networks', link: 'https://drive.google.com/file/d/1WfH-Cp6D-RBdZDMzmnbFs0haem86JJJk/view?usp=drivesdk' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java, Python, C and C++',
    skills: [
      { name: 'Java', mono: 'Jv' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [{ name: 'Node.js', mono: 'No' }],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Storing and querying data',
    skills: [
      { name: 'SQL', mono: 'Sq' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'DBMS', mono: 'Db' },
    ],
  },
  {
    id: 'ml',
    title: 'ML & Data',
    subtitle: 'Used across my projects',
    skills: [
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'IoT', mono: 'Io' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Version control',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOPS', mono: 'Oo' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'DAA', mono: 'Da' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['NPTEL Programming in Java (Elite + Silver)', 'HackerRank Java skill badge'],
  Python: ['Loan Approval Prediction', 'Book Recommendation System', 'Smart Traffic Management System'],
  'C++': ['HackerRank C++ skill badge'],
  HTML: ['Appin Technology internship'],
  CSS: ['Appin Technology internship'],
  JavaScript: ['Appin Technology internship'],
  'Node.js': ['Appin Technology internship'],
  MongoDB: ['Technical skills on the resume'],
  DBMS: ['KIT coursework'],
  'Scikit-learn': ['Loan Approval Prediction'],
  Pandas: ['Loan Approval Prediction', 'Book Recommendation System'],
  NumPy: ['Loan Approval Prediction', 'Book Recommendation System'],
  OpenCV: ['Smart Traffic Management System'],
  IoT: ['Smart Traffic Management System'],
  'Git': ['Active GitHub contributor'],
  GitHub: ['Active GitHub contributor', 'All three projects'],
  DSA: ['KIT coursework', '1490 questions solved'],
  OOPS: ['KIT coursework'],
  'Operating Systems': ['KIT coursework'],
  'Computer Networks': ['KIT coursework', 'CCNA Introduction to Networks'],
  DAA: ['KIT coursework'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Enter: Computer Science',
    period: '2024 – Present',
    synopsis: 'B.E. Computer Science and Engineering at Kalaignarkarunanidhi Institute of Technology, Coimbatore.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'B.E. Computer Science and Engineering at KIT, Coimbatore — current CGPA 7.91 / 10.',
        tags: ['B.E. CSE', 'CGPA 7.91'],
        runtime: '2024 – 2028',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Foundations',
        description: 'Coursework in Data Structures, DBMS, Operating Systems, OOP, Computer Networks and DAA.',
        tags: ['DSA', 'DBMS', 'OS', 'OOP', 'CN', 'DAA'],
        runtime: 'Coursework',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning to Build',
    period: 'Internship',
    synopsis: 'A one-month Web Development internship at Appin Technology, Coimbatore.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Intern',
        description: 'Completed a one-month internship building responsive web pages at Appin Technology.',
        tags: ['Responsive web pages'],
        runtime: 'One month',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Developer',
        description: 'Worked with HTML, CSS, JavaScript and basic backend integration.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Backend'],
        runtime: 'Appin Technology',
        palette: violet,
      },
      {
        code: 'S02 E03',
        title: 'The Debugger',
        description: 'Improved debugging, UI design and project deployment skills.',
        tags: ['Debugging', 'UI design', 'Deployment'],
        runtime: 'Appin Technology',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Real Projects',
    period: 'Projects',
    synopsis: 'Three projects across machine learning, recommendation and computer vision.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Predictor',
        description: 'Loan Approval Prediction — Logistic Regression, Decision Tree and Random Forest compared and tuned.',
        tags: ['Python', 'Scikit-learn', 'Pandas'],
        runtime: 'Machine Learning',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Recommender',
        description: 'Book Recommendation System — collaborative and content-based filtering over cleaned rating datasets.',
        tags: ['Python', 'Pandas', 'NumPy'],
        runtime: 'Machine Learning',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Traffic Controller',
        description: 'Smart Traffic Management System — OpenCV vehicle counting and ML-driven signal timing with IoT sensors.',
        tags: ['OpenCV', 'ML', 'IoT'],
        runtime: 'Computer Vision',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'The Proving Ground',
    period: 'Ongoing',
    synopsis: 'Competitive programming, certifications and hackathons beyond the classroom.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Problem Solver',
        description: '1490 questions solved, 214 active days and 71 contests attended across coding platforms.',
        tags: ['LeetCode', 'CodeChef', 'Codeforces'],
        runtime: '1490 solved',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'The Certified',
        description: 'NPTEL Programming in Java (Elite + Silver), Deloitte Data Analytics, Infosys Software Engineering and CCNA Introduction to Networks.',
        tags: ['NPTEL', 'Deloitte', 'Infosys', 'CCNA'],
        runtime: '4 credentials',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'The Hackathon Regular',
        description: 'Participated in numerous online hackathons and keeps building on GitHub.',
        tags: ['Hackathons', 'GitHub'],
        runtime: 'Online',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Certified language', title: 'Java', detail: 'NPTEL Elite + Silver • HackerRank badge', palette: amber },
  { label: 'The ML Original', title: 'Loan Approval Prediction', detail: '3 classifiers compared and tuned', palette: crimson },
  { label: 'The vision Original', title: 'Smart Traffic System', detail: 'OpenCV • ML • IoT', palette: ocean },
  { label: 'The recommender', title: 'Book Recommendation', detail: 'Collaborative + content-based filtering', palette: violet },
  { label: 'Most solved', title: 'CodeChef', detail: '1081 problems • 45 contests', palette: jade },
  { label: 'Overall count', title: '1490', detail: 'Questions solved • 71 contests • 214 active days', palette: crimson },
  { label: 'Badge earned', title: 'LeetCode 50 Days', detail: 'Badge 2026 • 353 solved', palette: amber },
  { label: 'First role', title: 'Web Dev Intern', detail: 'Appin Technology, Coimbatore', palette: ocean },
  { label: 'Job simulation', title: 'Deloitte', detail: 'Data Analytics Job Simulation', palette: jade },
  { label: 'Networking', title: 'CCNA', detail: 'Introduction to Networks', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · Computer Science',
    lines: ['Kalaignarkarunanidhi Institute of Technology, Coimbatore', '2024 – 2028'],
    chips: ['CGPA 7.91'],
  },
  {
    kicker: 'Skills',
    title: 'Python & the web.',
    lines: ['Java, Python, C, C++ · HTML, CSS, JavaScript, Node.js', 'SQL, MongoDB · Git, GitHub'],
    chips: ['Java', 'Python', 'JavaScript', 'Node.js', 'MongoDB', 'Git'],
  },
  {
    kicker: 'Internship',
    title: 'Web Development Intern',
    lines: ['Appin Technology, Coimbatore', 'Responsive web pages · HTML, CSS, JavaScript · Deployment'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Loan Approval Prediction — Scikit-learn', 'Book Recommendation System — Pandas, NumPy', 'Smart Traffic Management — OpenCV, ML, IoT'],
  },
  {
    kicker: 'Competitive programming',
    title: '1490 Questions Solved',
    lines: ['CodeChef 1081 · LeetCode 353', '71 contests · 214 active days'],
  },
  {
    kicker: 'Certified',
    title: '4 Certifications',
    lines: ['NPTEL · Deloitte · Infosys · CCNA'],
  },
  {
    kicker: 'Always building',
    title: 'Hackathons & GitHub',
    lines: ['Numerous online hackathons', 'Multiple academic and personal projects'],
  },
];

export type ProfileId = 'poovarasan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'poovarasan',
    name: 'Poovarasan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & internship', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
