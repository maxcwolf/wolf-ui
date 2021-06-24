'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})

var _default = require('./default')

Object.keys(_default).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _default[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _default[key]
    },
  })
})

var _ThemeProvider = require('./ThemeProvider')

Object.keys(_ThemeProvider).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _ThemeProvider[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ThemeProvider[key]
    },
  })
})
//# sourceMappingURL=index.js.map
