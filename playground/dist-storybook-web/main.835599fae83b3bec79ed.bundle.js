(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{333:function(module,exports,__webpack_require__){__webpack_require__(334),__webpack_require__(490),__webpack_require__(491),module.exports=__webpack_require__(680)},401:function(module,exports){},491:function(module,exports,__webpack_require__){__webpack_require__(124)},680:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(124).configure)([__webpack_require__(681),__webpack_require__(682)],module,!1)}).call(this,__webpack_require__(52)(module))},681:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=681},682:function(module,exports,__webpack_require__){var map={"./index.ts":683};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=682},683:function(module,exports,__webpack_require__){__webpack_require__(684),__webpack_require__(776)},684:function(module,exports,__webpack_require__){(function(module){var _interopRequireDefault=__webpack_require__(110),_addonActions=__webpack_require__(685),_addonKnobs=__webpack_require__(696),_reactNative=__webpack_require__(124),_Text=(_interopRequireDefault(__webpack_require__(6)),_interopRequireDefault(__webpack_require__(204))),_=_interopRequireDefault(__webpack_require__(764)),_Device=__webpack_require__(768),_jsxRuntime=__webpack_require__(113);(0,_reactNative.storiesOf)("Button",module).addDecorator((function(getStory){return(0,_jsxRuntime.jsx)(_Device.Device,{children:getStory()})})).add("with text",(function(){return(0,_jsxRuntime.jsx)(_.default,{onPress:(0,_addonActions.action)("clicked-text"),children:(0,_addonKnobs.text)("Button text","Hello Button")})})).add("with some emoji",(function(){return(0,_jsxRuntime.jsx)(_.default,{onPress:(0,_addonActions.action)("clicked-emoji"),children:(0,_jsxRuntime.jsx)(_Text.default,{children:"😀 😎 👍 💯"})})}))}).call(this,__webpack_require__(52)(module))},764:function(module,exports,__webpack_require__){__webpack_require__(39);var _interopRequireDefault=__webpack_require__(110);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Button,exports.styles=void 0;_interopRequireDefault(__webpack_require__(6));var _Text=_interopRequireDefault(__webpack_require__(204)),_TouchableOpacity=_interopRequireDefault(__webpack_require__(332)),_StyleSheet=_interopRequireDefault(__webpack_require__(59)),_jsxRuntime=__webpack_require__(113),styles=_StyleSheet.default.create({button:{alignItems:"center",backgroundColor:"#43ABDA",borderRadius:20,height:50,justifyContent:"center",marginBottom:0,padding:8,alignSelf:"center",width:"100%"},text:{color:"#FFFFFF"}});function Button(_ref){var onPress=_ref.onPress,children=_ref.children;return(0,_jsxRuntime.jsx)(_TouchableOpacity.default,{style:styles.button,onPress:onPress,children:(0,_jsxRuntime.jsx)(_Text.default,{style:styles.text,children:children})})}exports.styles=styles,Button.displayName="Button",Button.defaultProps={children:null,onPress:function onPress(){}};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["storybook/stories/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"storybook/stories/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},768:function(module,exports,__webpack_require__){__webpack_require__(39);var _interopRequireDefault=__webpack_require__(110);Object.defineProperty(exports,"__esModule",{value:!0}),exports.Device=void 0;_interopRequireDefault(__webpack_require__(6));var _View=_interopRequireDefault(__webpack_require__(112)),_StyleSheet=_interopRequireDefault(__webpack_require__(59)),_ImageBackground=_interopRequireDefault(__webpack_require__(769)),_jsxRuntime=__webpack_require__(113),styles=_StyleSheet.default.create({deviceWrapper:{maxWidth:400,width:"100%"},device:{position:"relative",backgroundSize:"cover",paddingBottom:"198.89807163%",zIndex:0},screen:{flex:1,position:"absolute",backgroundSize:"cover",backgroundColor:"transparent",pointerEvents:"auto",zIndex:10,marginTop:60,marginHorizontal:30,width:"85%"}}),Device=function Device(_ref){var children=_ref.children;return(0,_jsxRuntime.jsx)(_View.default,{style:styles.deviceWrapper,children:(0,_jsxRuntime.jsx)(_ImageBackground.default,{style:styles.device,source:{uri:__webpack_require__(775)},children:(0,_jsxRuntime.jsx)(_View.default,{style:styles.screen,children:children})})})};exports.Device=Device,Device.displayName="Device";try{Device.displayName="Device",Device.__docgenInfo={description:"",displayName:"Device",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Device/Device.tsx#Device"]={docgenInfo:Device.__docgenInfo,name:"Device",path:"components/Device/Device.tsx#Device"})}catch(__react_docgen_typescript_loader_error){}},775:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/iphone-portrait.2964dc03.png"},776:function(module,exports,__webpack_require__){(function(module){__webpack_require__(110)(__webpack_require__(6));var _addonLinks=__webpack_require__(777),_reactNative=__webpack_require__(124),_=__webpack_require__(780),_jsxRuntime=__webpack_require__(113);(0,_reactNative.storiesOf)("Welcome",module).add("to Storybook",(function(){return(0,_jsxRuntime.jsx)(_.Welcome,{showApp:(0,_addonLinks.linkTo)("Button")})}))}).call(this,__webpack_require__(52)(module))},780:function(module,exports,__webpack_require__){__webpack_require__(39);var _interopRequireDefault=__webpack_require__(110);Object.defineProperty(exports,"__esModule",{value:!0}),exports.Welcome=void 0;_interopRequireDefault(__webpack_require__(6));var _View=_interopRequireDefault(__webpack_require__(112)),_Text=_interopRequireDefault(__webpack_require__(204)),_StyleSheet=_interopRequireDefault(__webpack_require__(59)),_TouchableOpacity=_interopRequireDefault(__webpack_require__(332)),_jsxRuntime=__webpack_require__(113),styles=_StyleSheet.default.create({wrapper:{flex:1,padding:24,justifyContent:"center"},header:{fontSize:18,marginBottom:18},content:{fontSize:12,marginBottom:10,lineHeight:18}}),Welcome=function Welcome(_ref){var showApp=_ref.showApp;return(0,_jsxRuntime.jsxs)(_View.default,{style:styles.wrapper,children:[(0,_jsxRuntime.jsx)(_Text.default,{style:styles.header,children:"Welcome to React Native Storybook"}),(0,_jsxRuntime.jsx)(_Text.default,{style:styles.content,children:"This is a UI Component development environment for your React Native app. Here you can display and interact with your UI components as stories. A story is a single state of one or more UI components. You can have as many stories as you want. In other words a story is like a visual test case."}),(0,_jsxRuntime.jsx)(_Text.default,{style:styles.content,children:'We have added some stories inside the "storybook/stories" directory for examples. Try editing the "storybook/stories/Welcome.js" file to edit this message.'}),(0,_jsxRuntime.jsx)(_TouchableOpacity.default,{onPress:function _showApp(event){event.preventDefault(),showApp&&showApp()},children:(0,_jsxRuntime.jsx)(_Text.default,{children:"Show App"})})]})};exports.Welcome=Welcome,Welcome.displayName="Welcome";try{Welcome.displayName="Welcome",Welcome.__docgenInfo={description:"",displayName:"Welcome",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["storybook/stories/Welcome/index.tsx#Welcome"]={docgenInfo:Welcome.__docgenInfo,name:"Welcome",path:"storybook/stories/Welcome/index.tsx#Welcome"})}catch(__react_docgen_typescript_loader_error){}}},[[333,1,2]]]);
//# sourceMappingURL=main.835599fae83b3bec79ed.bundle.js.map