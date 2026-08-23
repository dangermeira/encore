# Encore — Architecture

Approved 2026-08-23.

## The shape

```
browser (React) ──cookie──► our backend ──► Spotify
                                │
                                ▼
                            database      + a weekly timer (GitHub Actions)
                                            calls the backend: "snapshot everyone"
```

Three rules, always:

1. The browser never talks to Spotify. Only the backend does.
2. Spotify keys and app secrets never leave the server.
3. Every `/api` route checks the session and filters every query by user id.

## The data — 5 tables

| Table | One row = | Fields |
|---|---|---|
| `users` | one person | id, spotify_id (unique), display_name, avatar_url, created_at |
| `spotify_accounts` | that person's Spotify keys | user_id, refresh_token, access_token, access_token_expires_at |
| `sessions` | one login on one device | id, token_hash (unique), user_id, created_at, expires_at |
| `snapshots` | one week's capture for one person | id, user_id, taken_at |
| `snapshot_items` | one artist or track in a capture | id, snapshot_id, item_type (artist/track), spotify_item_id, name, image_url, rank |

Keys live in their own table so they can't leak by accident. The changes view
(new / gone / moved) is computed by comparing two snapshots on request — diffs are
never stored, so there's nothing to keep in sync.

## Login, step by step

1. User clicks "Log in with Spotify." Backend redirects to Spotify's approval page.
2. User approves. Spotify redirects back to the backend with a one-time code.
3. Backend trades code + app secret for an **access token** (~1 hour) and a
   **refresh token** (long-lived). All of it stays server-side.
4. Backend finds or creates the `users` row and stores the keys.
5. Backend creates a `sessions` row and sets an httpOnly cookie — page scripts
   can't read it; it just rides along on requests.
6. Every request after: cookie → session row → user. Expired access tokens are
   refreshed quietly with the refresh token.

Sessions are database rows, not JWTs: a row is easy to understand and easy to
kill (delete row = logged out).

## The API

- `GET /auth/login`, `GET /auth/callback`, `POST /auth/logout`
- `GET /api/me` — who am I
- `GET /api/snapshots` — my weeks
- `GET /api/snapshots/latest`, `GET /api/snapshots/:id` — one dashboard
- `GET /api/changes` — this week vs last week
- `POST /internal/snapshot-all` — the weekly timer calls this with a secret
  header (machines log in with secrets, not cookies)

## The weekly job

Timer fires → backend loops through users → refresh each key → fetch top artists
and tracks → write the snapshot. Two rules: skip anyone who already has this
week's snapshot (safe to re-run), and one user failing never stops the rest.

## Locked doors

These 5 tables · database sessions · keys server-side only · diffs computed, not
stored. Everything else stays easy to change.
