'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})

var _icon = require('./icon')

Object.keys(_icon).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _icon[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _icon[key]
    },
  })
})

var _constants = require('./constants')

Object.keys(_constants).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _constants[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key]
    },
  })
})

var _customShadow = require('./customShadow')

Object.keys(_customShadow).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _customShadow[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _customShadow[key]
    },
  })
})
//# sourceMappingURL=index.js.map
