"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventBus =
/*#__PURE__*/
function () {
  function EventBus() {
    _classCallCheck(this, EventBus);
  }

  _createClass(EventBus, null, [{
    key: "on",
    value: function on(eventName, handler, scope) {
      if (!EventBus.handlers[eventName]) {
        EventBus.handlers[eventName] = [];
      }

      EventBus.handlers[eventName].push({
        subscription: handler,
        scope: scope
      });
    }
  }, {
    key: "fireEvent",
    value: function fireEvent(eventName) {
      if (!EventBus.handlers[eventName]) {
        console.warn('Event is not registed.');
        return;
      }

      var handlers = EventBus.handlers[eventName];

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = handlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _step.value,
              subscription = _step$value.subscription,
              scope = _step$value.scope;
          scope = scope !== undefined ? scope : this;
          subscription.apply(scope, args);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return EventBus;
}();

EventBus.handlers = {};
var _default = EventBus;
exports["default"] = _default;
//# sourceMappingURL=EventBus.js.map