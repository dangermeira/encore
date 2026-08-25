# Encore (working name)

Your Spotify listening history as a timeline: log in with Spotify, Encore snapshots
your top artists and tracks every week, and you watch your taste change over time.

Second AI-assisted build, successor to Mirror. This one ships what Mirror deferred:
**deployed**, with a **database**, **user accounts**, and a load-bearing **external API**.

## Status: building v1 (scaffold landed 2026-08-23)

- Scope and milestones: [docs/development-plan.md](docs/development-plan.md)
- Architecture: [docs/architecture.md](docs/architecture.md)
- Decisions log: [docs/decisions.md](docs/decisions.md)
- How we build: [docs/ways-of-working.md](docs/ways-of-working.md)

Next: the walking skeleton — login + one database row + one API call, deployed.

## Run it (dev)

Backend (http://127.0.0.1:8000):

    cd backend
    python3 -m venv .venv
    .venv/bin/pip install -r requirements.txt -r requirements-dev.txt
    cp .env.example .env   # then fill in values
    .venv/bin/uvicorn app.main:app --reload

Frontend (http://localhost:5173, proxies /api and /auth to the backend):

    cd frontend
    npm install
    npm run dev

Locked so far:

- **Deployed v1 target:** ~Oct 15, 2026 (Summer 2027 recruiting season).
- **Goals:** résumé deadline governs *scope* · deep understanding governs *method* ·
  real users are the *post-v1 stretch*.
- **Capacity:** ~5 hrs/week → ~40 focused hours to v1.
- **Pairing:** Claude drives in small explained increments; Luan approves, reviews,
  and teach-backs every change.
- **Walking skeleton first:** login + one database row + one external API call,
  live at a real URL, by end of week 2 — then every step iterates on a working
  production app.

Full docs (`CLAUDE.md` router + `docs/` canon, Mirror-style) arrive with the scaffold.
This README carries project state until then.
