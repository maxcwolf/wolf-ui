# Components

## Getting Started

### Icons

The `Icon` component uses react-native-vector-icons under the hood and the correct fonts will need to be installed in your React Native project before being able to use the component.

- Browse to `node_modules/react-native-vector-icons` and drag the folder `Fonts` (or just the ones you want) to your project in Xcode. **Make sure your app is checked under "Add to targets" and that "Create groups" is checked if you add the whole folder**. Not familiar with Xcode? Try [this article](https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06)
- Edit `Info.plist` and add a property called **Fonts provided by application** (or `UIAppFonts` if Xcode won't autocomplete/not using Xcode) and type in the files you just added. It will look something like this:

![XCode screenshot](https://cloud.githubusercontent.com/assets/378279/12421498/2db1f93a-be88-11e5-89c8-2e563ba6251a.png)

 <details><summary>List of all available fonts to copy & paste in info.plist</summary>
  
  ```xml
  <key>UIAppFonts</key>
  <array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>Zocial.ttf</string>
    <string>Fontisto.ttf</string>
  </array>
  ```
