'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})

var _InputText = require('./InputText')

Object.keys(_InputText).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _InputText[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _InputText[key]
    },
  })
})
//# sourceMappingURL=index.js.map
