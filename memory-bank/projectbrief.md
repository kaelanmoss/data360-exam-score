# Project Brief: Data 360 Consultant Exam Score App

## One-liner

A free web tool that turns Salesforce Data 360 Consultant exam section percentages into an estimated overall score, per-section question breakdown, and official study links — embedded on the owner's Wix site for others to use.

## Problem

After taking the exam, Salesforce emails section-level percentages, not exact question counts. Candidates want to know:
- Did I pass?
- How many questions did I likely get right per section?
- What should I study next?

## Target users

- People preparing for or retaking the **Salesforce Data 360 Consultant** certification
- Study partners shared via the Wix embed link

## Current features (shipped)

- [x] Input 6 official exam section percentages
- [x] Weighted overall score (70% passing threshold)
- [x] Estimated questions correct per section (60 questions total)
- [x] Section breakdown sorted by "room to improve"
- [x] Official Salesforce Help + Trailhead study links per section
- [x] "Focus here" highlight on sections below passing
- [x] Sample data demo button
- [x] Hosted on GitHub Pages
- [x] Embedded on Wix via iframe

## Exam sections (official weights)

| Section | Weight |
|---------|--------|
| Solution Positioning | 14% |
| Data 360 Setup and Administration | 13% |
| Data Source Connection and Ingestion | 18% |
| Harmonization and Unification | 17% |
| Data Enhancements, Sharing, and Analysis | 18% |
| Data Activations and Utilization | 20% |

**Passing score**: 70% | **Questions**: 60 | **Duration**: 105 min

## Roadmap (ideas — prioritize with user over time)

### Near term
- [ ] Paste-from-email parser (auto-fill section scores from results text)
- [ ] Shareable results URL (query params)
- [ ] Print / save results as PDF or image

### Medium term
- [ ] Dark mode
- [ ] Retake history (localStorage — no account needed)
- [ ] "Study plan" export (weakest sections + links)

### Long term
- [ ] Practice question mode (separate from score calculator)
- [ ] Compare two exam attempts side-by-side
- [ ] Custom domain instead of iframe-only on Wix

## Non-goals (for now)

- Not an official Salesforce product
- No user accounts or backend database
- No storing exam scores on a server (privacy)

## Success criteria

- Someone can open the Wix page, enter scores, and understand pass/fail + what to study in under 2 minutes
- Study links stay aligned with official Salesforce documentation
- App remains maintainable as a small static site (no framework required unless we outgrow it)

## Owner preferences

- Beginner-friendly GitHub workflow
- Incremental improvements over big rewrites
- Agent should read/update `memory-bank/` as the project evolves