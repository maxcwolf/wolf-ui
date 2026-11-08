# 0001. Every standard has a guard

- Status: accepted
- Date: 2026-11-07

## Context

wolf-ui v1 had conventions only in prose and in reviewers' heads. Engineers and coding agents
both follow the path of least resistance, and an agent rarely reads a style guide end to end. A
rule nobody enforces decays the first time someone is in a hurry.

## Decision

Every standard in `docs/engineering-standards.md` names the file or command that enforces it:
the type system, ESLint (including local `wolf/*` rules), dependency-cruiser, knip, a contract
test, or a Playwright suite. `yarn check` runs them all; CI and the `pre-push` hook run
`yarn check`. A rule that cannot be automated yet is marked **Review only** and listed as a gap.
Where a correct default can be generated (`yarn new:component`), we generate it rather than
document it.

## Consequences

Drift is caught at the moment it happens, by the same tools for humans and agents. Adding a
standard costs a guard and a test of the guard. Guard files are CODEOWNERS-protected, so
loosening one is visible in review.
