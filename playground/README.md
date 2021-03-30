# Playground

## Running the Playground Locally

### Building Mobile Storybook

To run the on device version of Storybook, simply build and launch the React Native application using
`npx react-native run-ios` or `npx react-native run-android`

### Building Web Storybook

React Native component stories are converted to React Native Web and displayed in the traditional web-based Storybook interface.

To build Storybook web, run `yarn storybook:web-build`

Once you have built Storybook web, you can launch it locally with `yarn storybook:web`
