# Encore — Decisions Log

The "why" behind each significant choice (informal ADRs). Newest on top. Append a
new entry when a real decision is made; don't rewrite old ones.

Format: **Date — Decision.** Options considered · why · what I learned.

---

**2026-08-23 — Phase 4 stack approved.**
Reuse Mirror's frameworks (React + TS + Vite + Tailwind; FastAPI + Python) — the
40-hour novelty budget goes to database, auth, and deployment, not new syntax ·
Postgres on Neon free tier (Render's free database self-deletes after 30 days —
trap avoided) · SQLAlchemy + Alembic, and we read the SQL it emits · OAuth
hand-rolled with httpx (the flow is the lesson); sessions = our own table + an
httpOnly cookie · one Render free service serves both API and built frontend
(same origin → cookies just work, zero CORS; dev uses a Vite proxy — the opposite
of Mirror's CORS choice, deliberately: that lesson is banked, and cross-site
cookies are a tar pit) · GitHub Actions for the weekly cron and CI · repo public
(portfolio + free CI minutes). Accepted quirk: the free service sleeps after ~15
idle minutes (~30–60s wake).

**2026-08-23 — Phase 3 design approved.**
Database-backed cookie sessions over JWT (a row is easy to understand and easy to
revoke — delete row = logged out; JWT is a reading topic) · Spotify keys in their
own table, server-only, so they can't leak by accident · diffs computed on
request, never stored (nothing to keep in sync) · one snapshot per user per week,
job safe to re-run, one user's failure never stops the batch.

**2026-08-23 — Scope locked (see development-plan.md).**
v1 = Spotify login, weekly snapshots, dashboard, history, changes view, privacy.
Explicit not-building list recorded. Walking skeleton live by Sep 6; v1 live
Oct 15; week 8 is buffer.

**2026-08-23 — Encore chosen from a 4-candidate menu.**
Options: Stack Night (group session scheduler) · Encore (Spotify timeline) ·
Climb (OW2 rank tracker) · Blend Court (taste match-up). Why Encore: auth is this
project's #1 new skill, and OAuth-as-login makes auth the showpiece; adds
background jobs and time-series data; distinct from Mirror in domain and
mechanics; fits the 40-hour budget; fully $0. Accepted limit: Spotify dev mode
caps at ~25 hand-allowlisted users — fine for the friends rollout. Runner-up on
record: Stack Night (richer roles/permissions syllabus).
