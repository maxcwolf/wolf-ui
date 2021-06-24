'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
var _exportNames = {
  Button: true,
}
exports.Button = void 0

var _Button = require('../../base/Button')

Object.keys(_Button).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return
  if (key in exports && exports[key] === _Button[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Button[key]
    },
  })
})

var _ButtonMain = require('./ButtonMain')

Object.keys(_ButtonMain).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return
  if (key in exports && exports[key] === _ButtonMain[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ButtonMain[key]
    },
  })
})

var _ButtonInner = require('./ButtonInner')

Object.keys(_ButtonInner).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return
  if (key in exports && exports[key] === _ButtonInner[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ButtonInner[key]
    },
  })
})
const Button = Object.assign(_Button.Button, {
  Main: _ButtonMain.ButtonMain,
  Inner: _ButtonInner.ButtonInner,
})
exports.Button = Button
//# sourceMappingURL=index.js.map
