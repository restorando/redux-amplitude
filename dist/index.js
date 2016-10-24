'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _reduxTap = require('redux-tap');

var _reduxTap2 = _interopRequireDefault(_reduxTap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterAmplitude = function filterAmplitude(_ref) {
  var meta = _ref.meta;
  return meta && meta.amplitude;
};

var warn = function warn() {
  return window !== 'undefined' && _typeof(window.amplitude) !== 'object' && console.warn('redux-amplitude has been executed but it seems like Amplitude snippet has not been loaded.');
};

exports.default = function () {
  return (0, _reduxTap2.default)(filterAmplitude, function (_ref2, action, store) {
    var key = _ref2.key;
    var payload = _ref2.payload;

    typeof window !== 'undefined' && _typeof(window.amplitude) === 'object' ? window.amplitude.logEvent(key, payload) : warn();
  });
};
