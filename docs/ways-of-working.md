# Encore — Ways of Working

How we build Encore. Read before starting a step. (Terse version: `CLAUDE.md`.)

## The build loop (every step)

PLAN → BUILD → VERIFY → REVIEW → EXPLAIN → SHIP

1. **Plan** — plan mode first for anything non-trivial; Luan approves before any edit.
2. **Build** — small, explained increments. One new concept at a time.
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
- `TODO(human)` reps: currently **off** (Luan's call, 2026-08-23) — flip anytime.
- Verify, don't trust. If Luan can't explain it in their own words, it isn't done.
