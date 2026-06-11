# System Patterns

## Architecture

Single-page static app. No build step.

```
index.html   → structure, exam selector, form, results
styles.css   → layout, tier colors, Salesforce-inspired theme
exams.js     → EXAMS config (all certifications, sections, study links)
app.js       → scoring logic, DOM rendering, exam switching
```

## Key data structures

- `EXAMS` in `exams.js` — per exam: sections, weights, passing score, studyResources, sampleScores
- `currentExamId` in `app.js` — active exam from dropdown

## Section color tiers

- ≤59% → `section-tier-weak` (pastel red)
- 60–84% → `section-tier-mid` (pastel yellow)
- ≥85% → `section-tier-strong` (pastel green)

## Scoring pattern

1. `distributeQuestions()` — splits 60 questions across sections by weight (largest remainder)
2. `computeWeightedScore()` — sum of `sectionScore * weight * 0.01`, rounded
3. `estimateCorrect()` — per-section correct count from percentage
4. Sections sorted by `roomToImprove` for study prioritization

## UI rendering pattern

- `renderInputs()` — builds form from `EXAM.sections`
- `renderResults()` — score ring, stats, section cards
- `renderStudyLinks()` — official links; adds "Focus here" if section < 70%

## Styling conventions

- CSS variables in `:root` for colors
- Cards: `.card` with rounded corners and shadow
- Primary action: `.btn-primary` (Salesforce blue `#0176d3`)
- Mobile breakpoints at `760px`

## Adding a new section link

Edit `STUDY_RESOURCES` in `app.js` only — do not hardcode in HTML.

## Adding a new feature

1. Prefer extending `app.js` + minimal HTML hooks in `index.html`
2. Add styles to `styles.css`
3. Update `memory-bank/progress.md` when shipped