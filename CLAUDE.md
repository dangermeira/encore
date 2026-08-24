# Encore

Spotify listening timeline: log in with Spotify, weekly snapshots of your top
artists/tracks, watch your taste change. Phase: v1 build (live by Oct 15, 2026).

## Invariants (never break)
- The browser never calls Spotify — the backend is the only caller.
- Secrets and Spotify tokens live server-side only (.env / DB): never in the
  frontend bundle, never committed.
- Every `/api` route checks the session and filters every query by user id.
- Failure modes are first-class states, never crashes.

## How we work
- Luan directs and approves; Claude drives in small, explained increments.
- Keep explanations simple: plain words, short sentences, define terms on first use.
- Branch per step → PR → Luan reviews and merges. Conventional Commits. Docs ride
  the same commit as the change.
- Check in before architectural decisions; push back on out-of-scope asks (the
  not-building list lives in development-plan.md).

## Stack
React + TS + Vite + Tailwind (frontend) · FastAPI + SQLAlchemy + Alembic
(backend) · Postgres on Neon · Render free tier (one service serves API + built
frontend) · GitHub Actions (CI + weekly snapshot cron).

## Docs (read on demand)
- `docs/development-plan.md` — scope, not-list, milestones. **Read before starting/finishing a step.**
- `docs/architecture.md` — shape, tables, login flow, API. **Read before backend/data work.**
- `docs/ways-of-working.md` — build loop, git workflow, practices. **Read before starting a step.**
- `docs/decisions.md` — the why behind choices; append on each decision.
- `docs/glossary.md` — plain-language terms; add new ones as they appear.

## Rules
`docs/` is canonical for project facts; update the relevant doc in the same
commit as the change. v1 scope only — new ideas go to the not-list first.
