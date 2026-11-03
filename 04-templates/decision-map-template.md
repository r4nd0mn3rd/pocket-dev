# Decision Map: <name>

**Destination:** <the thing we are finding a way to>
**Status:** planning (plan, don't do)
**Created:** YYYY-MM-DD

> Wayfinding: chart the way, don't charge at the destination. Each ticket resolves a
> decision. The map is done when nothing is left to decide before someone builds.

## How to read

- Tickets: research / prototype / grilling / task
- `blocks: [id]` = this ticket must resolve before those
- `dependsOn: [id]` = those must resolve first
- Frontier = tickets whose dependsOn are all resolved

## Tickets

| id | type | title | question | status | blocks |
|---|---|---|---|---|---|

## Notes

- Override "plan, don't do" only here, in the map's Notes, and accept that the
  constrained agent owns this file (known gap).
- Prototype tickets: require a playtest/evaluation gate before spec.
