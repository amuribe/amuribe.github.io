const monthYear = new Intl.DateTimeFormat('en-CA', { month: 'short', year: 'numeric', timeZone: 'UTC' });
const fullDate = new Intl.DateTimeFormat('en-CA', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

/** "May 2026 – present" or "May 2026 – Aug 2026" */
export function formatRange(start: Date, end?: Date): string {
  return `${monthYear.format(start)} – ${end ? monthYear.format(end) : 'present'}`;
}

/** "10 November 2026" */
export function formatDate(date: Date): string {
  return fullDate.format(date);
}

/** Machine-readable date for <time datetime>. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
