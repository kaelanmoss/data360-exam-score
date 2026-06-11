# AGENTS.md

**Project**: Data 360 Consultant Exam Score App
**Purpose**: Give AI agents persistent memory and consistent behavior across sessions.
**Inspired by**: [AGENT-ZERO](https://github.com/msitarzewski/AGENT-ZERO/blob/main/AGENTS.md) (compaction protocol + memory bank)

> **Auto-loaded by Grok.** When you open this project in Grok, this file is injected into every session automatically. You do not need to ask the agent to read it.

---

## Mandatory automatic behavior (no user reminder needed)

On **every session** in this repo, before doing any work:

1. Read `memory-bank/activeContext.md` and `memory-bank/progress.md`
2. Read `memory-bank/projectbrief.md` if the task involves features or scope
3. Proceed with the user's request using that context

During and after work, **without being asked**:

- Update `memory-bank/activeContext.md` when focus changes or work pauses
- Update `memory-bank/progress.md` when something ships or gets blocked
- Append `memory-bank/decisions.md` when making a non-obvious technical choice

The user should **not** have to say "read AGENTS.md" or "update memory bank" each time.

---

## Session startup (every conversation)

1. Read `memory-bank/toc.md` for the file index
2. Read `memory-bank/projectbrief.md` for vision and constraints
3. Read `memory-bank/activeContext.md` for what we're working on right now
4. Read `memory-bank/progress.md` for done / next
5. Skim `memory-bank/techContext.md` and `memory-bank/systemPatterns.md` before code changes

**Fast sessions** (tiny fix): read `activeContext.md` + `progress.md` only.

**Feature sessions**: also read `projectbrief.md`, `decisions.md` if architecture is involved.

---

## Compaction protocol (agent memory across long chats)

Context can compress mid-session. The agent may lose earlier conversation detail.

### Continuous persistence — do this as you work

After each meaningful step (feature planned, code changed, bug fixed, deploy attempted), update:

| File | What to save |
|------|----------------|
| `memory-bank/activeContext.md` | Current task, open questions, in-progress work |
| `memory-bank/progress.md` | What finished, what's next, blockers |
| `memory-bank/decisions.md` | New architectural or product choices (brief ADR) |

Do **not** wait until "end of session" — compaction can happen without warning.

### After compaction (recovery)

1. Re-read `memory-bank/activeContext.md` and `memory-bank/progress.md`
2. Resume from saved state — do not restart from scratch
3. Confirm: `COMPACTION RECOVERY: resumed [task] from activeContext.md`

---

## Core rules for this repo

| Rule | Why |
|------|-----|
| **Extend before creating** | Small static app — prefer editing `index.html`, `styles.css`, `app.js` |
| **No secrets in repo** | Tokens/passwords stay in Passwords app; `.env*` and `*.rtf` are gitignored |
| **Match existing style** | Same naming, layout patterns, Salesforce-blue palette |
| **Official links only** | Study resources → `help.salesforce.com` and `trailhead.salesforce.com` |
| **Update memory bank** | When scope changes or a milestone completes, edit markdown before ending |
| **Cite code** | Reference `file:line` when discussing changes |

### File map (do not duplicate logic)

| File | Role |
|------|------|
| `index.html` | Page structure |
| `styles.css` | All styling |
| `app.js` | Exam data, scoring, study links, UI logic |
| `standalone.html` | Optional single-file build; regenerate if needed, don't fork logic |
| `memory-bank/*` | Agent memory — not shown to end users |

---

## Workflow for growing the app

```
IDEA → update projectbrief.md (if scope changes)
     → update activeContext.md (this session's task)
     → implement in index.html / styles.css / app.js
     → test locally (python3 -m http.server)
     → git commit + push (GitHub Pages redeploys)
     → update progress.md
     → verify Wix embed still works if layout changed
```

---

## When to update which memory file

| Event | Update |
|-------|--------|
| New feature idea | `projectbrief.md` (roadmap), `activeContext.md` |
| Started / paused work | `activeContext.md` |
| Shipped something | `progress.md`, clear `activeContext.md` next steps |
| Chose approach A over B | `decisions.md` |
| New code convention | `systemPatterns.md` |
| Hosting/deploy change | `techContext.md` |

---

## Quality bar

- Test in browser after JS changes
- Keep mobile layout working (`styles.css` media queries)
- Passing score and section weights must match official exam guide
- Disclaimer stays visible: not an official Salesforce tool

---

## Mission

Help the user grow a useful, shareable Data 360 exam study tool — incrementally, with memory that survives across chat sessions.