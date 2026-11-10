---
layout: ../layouts/Prose.astro
title: Styleguide
description: Every base element in one place, for judging the design system. Not linked from the nav.
---

This page is a living specimen of the design system. Change a value in `src/styles/tokens.css` and watch it update here. Body text is set in STIX Two Text at 18px, with a measure of about 66 characters and old-style figures like 1,240 and 2025.

## Second-level heading

A paragraph with *italic text*, **bold text**, a [link to somewhere](#), and `inline code`. Here is a statement that needs a source.[^1] Technical asides go in footnotes so the main text stays readable for everyone.[^2]

### Third-level heading

- An unordered list item
- Another item, long enough to wrap onto a second line so you can judge the hanging indent and the line height
- A third

1. An ordered list
2. With numbers

> A blockquote, in italics, for quoting someone else's words.

<p class="meta">Sept 2025 – Dec 2025 · Backend developer · Rust, Axum, PostgreSQL</p>

<p><span class="label">Abstract</span> — the support (lilac) label style.</p>

```rust
// A code block: monospace on --code-bg, with dual light/dark syntax themes.
fn main() {
    let printers = 38;
    println!("{printers} printers, roughly a third offline");
}
```

| Year | Role | Organisation |
|------|------|--------------|
| 2025 | Co-op developer | Example Corp |
| 2024 | Teaching assistant | Example University |

---

Select some text to see the lilac selection tint.

[^1]: A footnote. Its number in the text is emerald and links here; the ↩ link jumps back.
[^2]: The print server exposed status only through an undocumented SNMP endpoint, which is exactly the kind of detail a non-technical reader can skip.
