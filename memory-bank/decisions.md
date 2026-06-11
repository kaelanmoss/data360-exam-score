# Decisions

## 2026-06-10: Vanilla HTML/CSS/JS (no framework)

**Status**: Accepted

**Context**: Beginner-friendly project, simple calculator, needs easy GitHub Pages hosting.

**Decision**: No React/Vite/Next.js. Plain static files.

**Alternatives considered**: Next.js (rejected — overkill), single `standalone.html` only (kept as optional bundle, but `index.html` + split files is primary for maintainability).

---

## 2026-06-10: GitHub Pages + Wix iframe

**Status**: Accepted

**Context**: User has Wix site; Wix blocks or limits raw HTML/JS embeds.

**Decision**: Host app on GitHub Pages; embed via iframe on Wix.

**Consequence**: Public URL is `kaelanmoss.github.io/data360-exam-score/`; Wix page wraps it.

---

## 2026-06-10: AGENTS.md + memory-bank (not full AGENT-ZERO)

**Status**: Accepted

**Context**: User wants AI memory across sessions like AGENT-ZERO compaction protocol.

**Decision**: Lightweight `AGENTS.md` + `memory-bank/` adapted from [AGENT-ZERO](https://github.com/msitarzewski/AGENT-ZERO), simplified for a small static app.

**Alternatives considered**: Full AGENT-ZERO state machine (rejected — too heavy for this project size).

---

## 2026-06-10: Study links in results only

**Status**: Accepted

**Decision**: Official Salesforce Help + Trailhead links appear in section breakdown after calculate, sorted by weakness.

**Rationale**: Links are most useful once user sees which sections need work.