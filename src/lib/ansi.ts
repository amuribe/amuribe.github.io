/**
 * Convert terminal output with ANSI color codes into HTML spans, at build time.
 * Used to show real, colored CLI output as crisp, selectable text instead of a
 * bitmap screenshot. Handles the SGR codes CLIs commonly use: reset, bold, dim,
 * and the 16 standard foreground colors (30–37, 90–97).
 */

const COLOR_NAMES = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function ansiToHtml(input: string): string {
  let bold = false;
  let dim = false;
  let color: string | null = null;
  let out = '';

  // Split into [text, code, text, code, ...]
  const parts = input.split(/\x1b\[([0-9;]*)m/);
  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      const codes = part === '' ? [0] : part.split(';').map(Number);
      for (const c of codes) {
        if (c === 0) {
          bold = false;
          dim = false;
          color = null;
        } else if (c === 1) bold = true;
        else if (c === 2) dim = true;
        else if (c === 22) bold = dim = false;
        else if (c === 39) color = null;
        else if (c >= 30 && c <= 37) color = COLOR_NAMES[c - 30];
        else if (c >= 90 && c <= 97) color = `bright-${COLOR_NAMES[c - 90]}`;
      }
      return;
    }
    if (!part) return;
    const classes = [color && `ansi-${color}`, bold && 'ansi-bold', dim && 'ansi-dim'].filter(
      Boolean,
    );
    const text = escapeHtml(part);
    out += classes.length ? `<span class="${classes.join(' ')}">${text}</span>` : text;
  });

  // Drop any other escape sequences (cursor movement etc.) that slipped through
  return out.replace(/\x1b\[[0-9;?]*[A-Za-z]/g, '');
}
