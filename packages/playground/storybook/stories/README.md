# Stories

## Organization

There should be a `.stories.tsx` file for each component from `@wolf-ui/components`. The directory structure should match that of the `/components` directory in that package.

Each `.stories.tsx` file should contain at least one "default" story. This is the story can be thought of an individual component playground and should have knobs for most of the style props so that a user can test out the component states on the fly by changing the knobs.

## Formatting

Unfortunately, Storybook for React Native has not yet recieved an update to 6.0. This includes official support for [Component Story Format (CSF)](https://storybook.js.org/docs/react/api/csf). However, we can take advantage of some of the benefits of CSF while still being constrained to the legacy `storiesOf` API. As such, component stories should be written as components and exported.

## Addons

### Knobs

This is probably the most useful of the on device add ons. The `/storybook/knobs` directory contains knob factories which give you thematic values and options to select from.
