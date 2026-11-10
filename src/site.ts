/** Site-wide settings. Edit these instead of hunting through components. */
export const SITE = {
  name: 'AMUdev',
  author: 'Alex McPherson Uribe',
  // Used for search results and link previews. Keep it to one or two sentences.
  description:
    'Alex McPherson Uribe: computer science co-op student building software around music, film, and whatever else is worth being curious about.',
  email: 'alexmcphersonuribe@gmail.com',
  github: 'https://github.com/amuribe',
  linkedin: '', // add your LinkedIn URL, or leave empty to hide it
} as const;

export const NAV = [
  { href: '/projects/', label: 'Projects' },
  { href: '/writing/', label: 'Writing' },
  { href: '/shelf/', label: 'Shelf' },
  { href: '/about/', label: 'About' },
] as const;
