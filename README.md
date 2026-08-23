# Encore (working name)

Your Spotify listening history as a timeline: log in with Spotify, Encore snapshots
your top artists and tracks every week, and you watch your taste change over time.

Second AI-assisted build, successor to Mirror. This one ships what Mirror deferred:
**deployed**, with a **database**, **user accounts**, and a load-bearing **external API**.

## Status: scaffold — Phase 5 (stack approved 2026-08-23)

- Scope and milestones: [docs/development-plan.md](docs/development-plan.md)
- Architecture: [docs/architecture.md](docs/architecture.md)
- Decisions log: [docs/decisions.md](docs/decisions.md)

Stack approved (see decisions log). Next: scaffold, then the walking skeleton.

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
