# Wolf UI Component Playground

The mobile playground is an on device Storybook for development of the Wolf UI mobile library components.

## 🗂️ Table of Contents

1. [Getting Started](#🎉-getting-started)
   1. [Prerequisite Software](#💾-prerequisite-software)
1. [Creating Stories](#📝-creating-stories)
1. [Running on Device Storybook](#📚-running-on-device-storybook-📱)
1. [Building the Web Storybook](#📚-building-the-web-storybook-🖥️)

## 🎉 Getting Started

The following are instructions to build and run the DxM mobile app in your local development environment.

### 💾 Prerequisite Software

- [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
  > 💡 By default, the "Getting Started" page will show installation steps for Expo. Be sure to click on the ["Building Projects with Native Code"](https://i.imgur.com/0K0sDgq.jpg) tab.
- Node 14
  - [`nvm`](https://github.com/nvm-sh/nvm) to manage installed Node versions
- React Native CLI
  - `yarn global add @react-native-community/cli`
- Xcode
  > ⚠️ As of April 28, 2021 Xcode 12.5 is _not_ supported. If needed you can download 12.4 from [here](https://developer.apple.com/download/more/).
  - Xcode 12 is the minimum required version
  - Xcode command line tools
    - `sudo xcode-select --install`
  - iOS 11 is the minimum required version
- Android Studio
  - <https://developer.android.com/studio/>
  - Using the SDK Manager in Android Studio, make sure you have the tooling installed for at least SDK version 26.
- Yarn
  - <https://yarnpkg.com/>

## 📝 Creating Stories

Stories exist in `storybook/stories/` and filenames should be appended with `.stories.tsx`. All new stories should be within the `/stories` directory.

Unlike in the web version of Storybook, new stories are not automatically added to Storybook. To add newly created stories to Storybook, run `yarn prestorybook`.

## 📚 Running the On Device Storybook 📱

To run the on device version of Storybook, simply build and launch the React Native application using
`yarn ios` or `yarn android`

You may run a Storybook web server in tandem with your on device storybook with `yarn storybook:server`

## 📚 Building the Web Storybook 🖥️

The playground's RN stories can be converted to React Native Web and displayed in the traditional web-based Storybook interface. Currently, this is can only be built and served statically.

To build Storybook web, run `yarn storybook:web:build`

Once you have built Storybook web, you can launch it locally with `yarn storybook:web:run`
