/**
 * Résumé facts shown on /about. Keep in sync with the PDF in public/.
 * Dates are display strings so you can write them however you like.
 */

export const RESUME_PDF = '/Alex-McPherson-Uribe-Resume.pdf';

export const AVAILABILITY = 'Looking for co-op placements for Winter 2027 and Summer 2027.';

export const EDUCATION = [
  {
    dates: 'Sept 2025 – present',
    title: 'B.Sc. (Honours), Computer Science Co-op',
    org: 'Trent University, Peterborough, ON',
    details: ["Dean's Honour Roll, 2025 – present"],
  },
];

export const EXPERIENCE = [
  {
    dates: 'Sept 2022 – present',
    title: 'Guitar & Music Instructor',
    org: 'Self-employed, Waterloo, ON',
    details: [
      'Designed a structured curriculum teaching guitar and music theory from the fundamentals up.',
      'Planned lessons and managed scheduling and communication independently.',
      'Taught one student for nearly four years, tracking progress and giving constructive feedback.',
    ],
  },
];

export const SKILLS = [
  { label: 'Languages', items: ['C', 'C++', 'Rust', 'Python', 'Java', 'C#', 'JavaScript', 'TypeScript', 'PHP'] },
  {
    label: 'Tools',
    items: ['Git', 'GitHub Actions', 'React', 'Bash', 'CMake', 'Make', 'Cargo', 'SSH', 'LaTeX'],
  },
  { label: 'Databases', items: ['MySQL', 'MariaDB', 'Snowflake'] },
  { label: 'Systems', items: ['Linux (Debian/Ubuntu, Fedora)', 'Windows', 'WSL2'] },
];
