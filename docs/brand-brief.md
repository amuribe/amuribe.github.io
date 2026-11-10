# AMUdev: Brand Brief

**Site:** AMUdev · **Person:** Alex McPherson Uribe · **Logo:** custom mark coming later (text wordmark until then)

> Status: **draft v0.2**. Items marked `DECISION:` are yours to make.

## 1. Why this site exists

**This site is about one specific person, not "a developer".** It should be obvious within seconds that it couldn't belong to anyone else.

I'm a computer science co-op student. Most of what I build starts with something I love: a fretboard visualizer and music-theory engine in Rust because I play and write music, a REST API for logging films because I watch a lot of them. I take in a huge amount of art: arthouse and foreign film, music across every genre, books, TV, games. I'm curious about almost everything and I have opinions about most of it. I'm also a (very novice) birder.

The site should show both halves: **a capable developer**, and **a person with taste, curiosity and a life outside their career**. The second half is what makes the first one memorable.

**Goals (in priority order)**
1. Land a co-op position. I'm open to any area and want to learn on the job.
2. Show who I am, so the site feels personal, curious and human, not generic.
3. Make my projects understandable to anyone, technical or not.
4. Signal a long-term interest in **music technology** (the dream, even if it's niche).
5. Give me a home for writing and opinions, and a sandbox for playful, interactive experiments later.

## 2. Audiences

| Audience | What they want | How they read | What the site gives them |
|---|---|---|---|
| Technical recruiters | Stack, experience, a résumé | Skim for under 60 seconds | Byline metadata (stack, role, dates), a one-click résumé PDF |
| Engineering managers | Judgment, depth, code quality | Read one project closely | "Technical notes" sections, footnotes, repo links |
| Non-technical clients | Outcomes, trust, clarity | Read the top of each page | A plain-language **Abstract** on every project, captioned figures |
| Other developers | Ideas, techniques | Read blog posts | Well-set long-form writing, code blocks, RSS |

**The key insight:** one page can serve all four if it is layered like an academic paper. The abstract is for everyone. The body is for the curious. The notes are for experts.

## 3. Positioning

> **AMUdev is the home of Alex McPherson Uribe: a computer science student building software around music, film, and everything else worth being curious about.**

The differentiator isn't "I know X frameworks". It's that **the projects come from real interests** (music, film, art), and the site shows the taste and curiosity behind them. Hobbies and code are the same story, not two separate sections.

**How the hobbies show up:**
- **Projects**: hobby-driven tools are front and centre (the fretboard / music-theory engine, the film-logging API).
- **The Shelf**: books, films and music, listed like a bibliography with short opinions.
- **The "Currently" line** on the home page, so the site feels alive.
- **Writing**: room for opinions on art and media, not just technical posts.
- **Small details** later, e.g. a birding life list or a music piece of my own.

## 4. Core concept: the site as a paper

Every project is presented like a short research paper:

- **Title + byline**: date · role · stack · [Live demo] · [Source]
- **Abstract**: 2–3 sentences, no jargon. The test: "Would my non-technical relative understand this?"
- **Fig. 1**: a screenshot or GIF of the thing working, with a numbered caption.
- **Problem → Approach → Result**: short sections in plain language.
- **Technical notes**: the deep dive, with architecture, trade-offs, and what I'd do differently.
- **Footnotes**: technical asides collected at the end, so the main text stays readable.

Interactive and playful features later get a natural home: an interactive **figure** is still a Fig., just a live one.

## 5. Personality

**Curious · Warm · Humble · Funny · Opinionated (gently)**

- *Curious*: always learning something; interested in nearly every field and every kind of art.
- *Warm*: kind and considerate, and the writing sounds like a person, not a pitch.
- *Humble*: understated. Let the work and the taste speak; no self-promotion, no superlatives.
- *Funny*: humour in word choice and small details (a funny caption, a clever 404, a footnote aside), never in effects.
- *Opinionated (gently)*: real opinions on art and media, offered with curiosity, not authority.

The **look** stays academic and well-typeset (serif, footnotes, citations). That fits someone who reads closely and takes art seriously, and the warmth and humour in the *writing* keep it from feeling stiff.

## 6. Voice and tone

| Do | Don't |
|---|---|
| "I built a tool that shows every way to voice a chord on a guitar neck." | "Leveraged a cutting-edge, scalable microservice architecture…" |
| Be modest and specific: "I'm still learning X, so I…" | Oversell: "expert in", "master of", "rockstar". |
| Let opinions show: "I think this film's second half is better than its first." | Hedge everything into blandness. |
| State results with numbers: "cut load time from 4s to 0.8s." | Use vague claims like "highly optimized" or "blazing fast". |
| Write in first person, plainly. | Use third-person bios ("Amu is a passionate…"). |
| Admit trade-offs and mistakes. | Present every project as flawless. |
| Explain jargon on first use, or move it to a footnote. | Assume the reader knows what "SSR" or "gRPC" means. |

Banned words: *passionate, leverage, cutting-edge, seamless, blazing, robust* (unless you measured it), *innovative*.

## 7. Anti-patterns: the "not vibe-coded" rules

The site must **not** have:

- Gradient glows, neon blurs, "aurora" or blob backgrounds
- Scroll-triggered fade-ins, parallax, or text that animates in on load
- Glassmorphism (frosted cards), drop shadows on everything
- A hero with "Hi, I'm ___ 👋" + typing animation + two buttons
- A three-column feature card grid with icons
- Skill bars or percentage meters ("React 85%")
- Generic Lucide/Heroicon icons decorating headings
- Purple-to-blue gradients, or any gradient text
- Bento grids for their own sake
- Stock emoji as design elements

**The test:** if a design choice would look the same on 10,000 other portfolios, question it. Every visual decision should trace back to the "paper" concept or to a reason you can state.

## 8. Content inventory (launch)

| Page | Contents |
|---|---|
| **Home** | Name/wordmark, a one-sentence statement, 3–4 selected projects as "paper" entries (title, abstract, one figure thumbnail), latest 3 posts, links |
| **Projects** (`/projects`) | All projects as a list, like a publication list, newest first, with year headings |
| **Project page** (`/projects/[slug]`) | The paper structure from §4 |
| **Writing** (`/writing`) | Post list (date · title · one-line summary), tags, RSS |
| **Post** (`/writing/[slug]`) | Long-form article with footnotes and code blocks |
| **About** (`/about`) | Bio (first person), photo optional, experience timeline styled like a CV, skills as plain lists, résumé PDF download, contact email |
| **404** | A small joke in the voice of an erratum ("Erratum: this page does not exist.") |

**Per-project content checklist** (prepare these for each project):
- [ ] Plain-language abstract (2–3 sentences)
- [ ] 1–3 screenshots or GIFs
- [ ] Live demo URL (if possible)
- [ ] Repo URL
- [ ] Your role, timeframe, and stack
- [ ] One measurable result, or a concrete outcome

## 9. Open decisions

Decided (see `design-system.md` §7): STIX Two Text · Palette A (emerald, lilac, blue-grey) · footnotes · AMUdev / Alex McPherson Uribe · no section numbers.

Still open:
- `DECISION:` Custom logo (Alex is designing it; the site uses a text wordmark until then).
- `DECISION:` Metadata style: small caps or mono.
- `DECISION:` Section heading design.
- `DECISION:` Include a photo on About: yes or no?
