# Encore — Ways of Working

How we build Encore. Read before starting a step. (Terse version: `CLAUDE.md`.)

## The build loop (every step)

PLAN → BUILD → VERIFY → REVIEW → EXPLAIN → SHIP

1. **Plan** — plan mode first for anything non-trivial; Luan approves before any edit.
2. **Build** — one file at a time. Plan what the file does and how it connects
   before writing it. Who writes it depends on the content (see "Who writes
   what" below).
3. **Verify** — run it: a passing test, a live endpoint, a screenshot. Proof, not vibes.
4. **Review** — `/code-review` on the diff before committing.
5. **Explain** — after every commit, Claude first gives a high-level walkthrough:
   what was added, why, and how it connects to the architecture. Then Luan
   teach-backs it in their own words. Gaps go to `glossary.md`.
6. **Ship** — branch → PR → Luan reviews the diff → merge. Docs ride the same commit.

## Git

- Branch per step: `step-2-walking-skeleton`.
- Conventional Commits: `feat(backend): ...`, `fix:`, `docs:`, `chore:`, `test:`, `refactor:`.
- PRs even solo — a portfolio artifact and a clean review surface. Luan merges.

## Practices (all on from the scaffold)

- Backend: `ruff` (lint + format), `mypy --strict`, `pytest`. Frontend: TS strict, `oxlint`.
- CI runs all of it on every PR (GitHub Actions). Red CI = fix before new work.
- **Migrations:** every schema change is an Alembic migration in the same PR.
  Never edit the database by hand.
- **Deploy-first:** `main` auto-deploys to Render. Broken deploy = fix before new work.
- Direct dependencies declared and pinned in `requirements.txt`.

## Using AI deliberately

- Plan Mode before code Luan wants to truly understand; Explore subagent for API research.
- `/code-review` every diff; `/security-review` before anything public-facing.
- Effort dial: high for design and debugging, low for mechanical edits.
- Verify, don't trust. If Luan can't explain it in their own words, it isn't done.

## Who writes what (set 2026-09-01)

Luan is solid on OOP and DSA — can skim unfamiliar logic there and follow it.
Not yet familiar with infra/glue: API endpoints, database setup, auth wiring.

- **OOP/DSA-shaped code** (algorithms, data structures, business logic): Claude
  writes it directly, explained.
- **Infra/glue code** (a new route, a DB model, config wiring, the OAuth
  handshake): Claude gives a skeleton — signatures, structure, `TODO` markers,
  plus 1–2 lines of pseudocode at the tricky spots — and Luan writes the body,
  guided.

Plan weight scales to the file: one sentence for a trivial file, a real short
plan (what/why/how it connects) for anything with real logic or a new concept.
