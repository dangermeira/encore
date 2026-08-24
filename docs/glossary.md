# Encore — Glossary

Plain-language definitions, added as terms appear. The concept ledger.

- **OAuth** — a way to log in through another service (Spotify) without ever
  seeing the user's password. The app gets keys, not credentials.
- **Access token** — a short-lived key (~1 hour) the backend uses to call
  Spotify for a user.
- **Refresh token** — a long-lived key used to get new access tokens quietly.
- **Session** — a row in our database meaning "this person is logged in on this
  device." Delete the row = logged out.
- **Cookie (httpOnly)** — a small value the browser attaches to every request.
  httpOnly means page scripts can't read it — it just rides along.
- **Migration** — a versioned script that changes the database schema. Once real
  data exists, schema changes ship as migrations, never hand edits.
- **CI (continuous integration)** — a robot (GitHub Actions) that runs lint,
  types, and tests on every PR, so broken code can't sneak into `main`.
- **Walking skeleton** — the thinnest possible end-to-end version: login, one
  database row, one API call, deployed. Everything after iterates on it.
- **Cold start** — the delay when a sleeping free-tier server wakes for its
  first request (~30–60s on Render free).
