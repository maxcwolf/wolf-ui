#!/bin/sh
# Runs the Playwright suites, including the visual ones, in the official Playwright image, so
# screenshots are rendered by the same Linux, fonts and Chromium on every machine and in CI.
# The image tag follows the installed @playwright/test (renovate.json groups them).
# Extra arguments go to `playwright test`, e.g. --update-snapshots.
set -eu
root="$(git rev-parse --show-toplevel)"
version="$(node -p "require('@playwright/test/package.json').version")"
exec docker run --rm --ipc=host --init \
  -e VISUAL=1 -e CI="${CI:-}" \
  -v "$root":/work -w /work/e2e \
  "mcr.microsoft.com/playwright:v$version-noble" \
  npx --no-install -- playwright test "$@"
