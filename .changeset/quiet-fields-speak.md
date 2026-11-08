---
'@maxcwolf/ui-react-native': patch
---

Screen readers hear less noise and more context. `Button` sets `aria-busy` only while loading,
so it no longer says "not busy". On the web, `TextInput` is described by its helper or error text
(`aria-describedby`) and is marked `aria-invalid` when it has an error; iOS and Android keep
reading that text as the accessibility hint.
`TextInput` errors now appear inside a live region that is always mounted, so VoiceOver in Safari
announces it when it appears (it skipped the region when it was mounted with the text).
