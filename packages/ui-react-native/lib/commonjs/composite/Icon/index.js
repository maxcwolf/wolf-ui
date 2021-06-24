'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
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
//# sourceMappingURL=index.js.map
