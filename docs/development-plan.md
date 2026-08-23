# Encore — Development Plan

Scope approved 2026-08-23.

## Core loop

Log in with Spotify → Encore saves a weekly snapshot of your top artists and tracks →
you watch your taste change over time.

## v1 must-haves

1. Log in with Spotify. Log out.
2. Automatic weekly snapshot (plus one on first login).
3. Dashboard: your latest top artists and tracks.
4. Browse past weeks.
5. Changes view: new this week, gone, moved up or down.
6. Private: only you can see your data.

## Not building in v1

Public profiles · friend compares · fancy charts (clean lists first) · genre analysis ·
notifications · mobile · other music services. Wanted later? It goes in this file first.

## Constraints

- Budget: strictly $0 (free tiers; design around their quirks).
- Capacity: ~5 hrs/week → ~40 hours to v1.
- Spotify dev mode: ~25 hand-allowlisted users max. Fine for the friends rollout.

## Walking skeleton — live by Sep 6

A real URL where you log in with Spotify, one database row saves, one page shows your
name and current top artist. CI runs on every PR. Proves deploy, login, database, and
API end to end before any real feature exists.

## Milestones (5 hrs/week)

| Week | Dates | Goal |
|---|---|---|
| 1 | Aug 24–30 | Design + stack decisions, scaffold, Spotify dev app |
| 2 | Aug 31–Sep 6 | **Walking skeleton deployed** |
| 3–4 | Sep 7–20 | Real snapshots + dashboard |
| 5 | Sep 21–27 | Weekly auto-snapshot job + history browsing |
| 6 | Sep 28–Oct 4 | Changes view |
| 7 | Oct 5–11 | Polish, error states, README, demo script |
| 8 | Oct 12–15 | Buffer (things slip) → **v1 live Oct 15** |
