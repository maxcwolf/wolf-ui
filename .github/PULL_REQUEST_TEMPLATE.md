## What and why

<!-- One or two sentences. The PR title is the squash commit: a Conventional Commit. -->

## Checklist

- [ ] `yarn check` passes.
- [ ] **Accessibility:** new or changed UI has a role and name, a 44dp target, keyboard access,
      scaling text, and theme colors only; its states have stories (docs/accessibility.md).
- [ ] **Assistive technology:** if this adds a component or changes a role, name, state, keyboard
      handling or announcement, the component's `accessibility.md` is updated and I ran the
      manual pass and recorded it in docs/assistive-technology-testing.md (or asked for help
      here).
- [ ] **Theming:** no literal colors or sizes; new color pairings are in `contrastRequirements`.
- [ ] **Public API:** if the API snapshot changed, the change is intended and there is a
      changeset (`yarn changeset`).
- [ ] **Screenshots:** if `e2e/__screenshots__/` changed, I looked at every changed image.
- [ ] **Dependencies:** a new dependency is justified here; the library's allowlist is unchanged
      or an ADR explains why.
- [ ] **Guards:** if a guard file changed (ESLint, dependency-cruiser, tsconfig.base, knip,
      lefthook, Jest or Playwright config), the reason and an ADR are linked here.
