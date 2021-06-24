'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})

var _Button = require('./Button')

Object.keys(_Button).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _Button[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Button[key]
    },
  })
})

var _Icon = require('./Icon')

Object.keys(_Icon).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _Icon[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Icon[key]
    },
  })
})

var _Input = require('./Input')

Object.keys(_Input).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _Input[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Input[key]
    },
  })
})
//# sourceMappingURL=index.js.map
