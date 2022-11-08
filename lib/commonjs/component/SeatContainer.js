"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("../styles");
var _Seat = _interopRequireDefault(require("./Seat"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SeatContainer = _ref => {
  let {
    blockedSeatImage = undefined,
    disableSeat,
    driverImage = undefined,
    index,
    isSleeperLayout,
    item,
    numberTextStyle,
    onSeatSelected,
    seatImage = undefined
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styles.seatContainerStyle, index === 0 && _styles.viewBorderStyle]
  }, item.map(seat => {
    return /*#__PURE__*/_react.default.createElement(_Seat.default, {
      seatImage: seatImage,
      driverImage: driverImage,
      blockedSeatImage: blockedSeatImage,
      numberTextStyle: numberTextStyle,
      key: seat.id + Math.floor(Math.random() * 1000 + 1) + seat.type.toString(),
      isDisable: disableSeat || _styles.disableButton[seat.type] || !!seat.isSeatSeleced,
      seatData: seat,
      isSleeperLayout: isSleeperLayout,
      onSeatSelect: () => {
        onSeatSelected && onSeatSelected(seat);
      }
    });
  }));
};
var _default = /*#__PURE__*/_react.default.memo(SeatContainer);
exports.default = _default;
//# sourceMappingURL=SeatContainer.js.map