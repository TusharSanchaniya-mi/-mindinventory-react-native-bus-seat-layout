"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seatWidthConst = exports.seatSleeperHeightConst = exports.seatHeightConst = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("../styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable react-native/no-inline-styles */

const seatHeightConst = 45;
exports.seatHeightConst = seatHeightConst;
const seatSleeperHeightConst = 85;
exports.seatSleeperHeightConst = seatSleeperHeightConst;
const seatWidthConst = _reactNative.Dimensions.get('screen').width / 6 - 20;
exports.seatWidthConst = seatWidthConst;
const Seat = _ref => {
  let {
    blockedSeatImage = undefined,
    driverImage = undefined,
    isDisable,
    isSleeperLayout,
    numberTextStyle,
    onSeatSelect,
    seatData,
    seatImage = undefined
  } = _ref;
  const getSourceImage = () => {
    if (seatData.type === 'driver' && driverImage != undefined) {
      return driverImage.image;
    } else if ((seatData.type === 'available' || seatData.type === 'women' || seatData.type === 'booked') && seatImage !== undefined) {
      return seatImage.image;
    } else if (seatData.type === 'blocked' && blockedSeatImage !== undefined) {
      return blockedSeatImage.image;
    } else {
      return _styles.layoutImage[seatData.type];
    }
  };
  const getTintColorImage = () => {
    if (seatData.type === 'driver' && driverImage !== undefined) {
      return driverImage.tintColor;
    } else if (seatData.type === 'available' && seatImage !== undefined) {
      return seatImage.tintColor;
    } else if (seatData.type === 'women') {
      return _styles.selectedSeatColor[seatData.type];
    } else if (seatData.type === 'booked') {
      return _styles.selectedSeatColor[seatData.type];
    } else if (seatData.type === 'blocked' && blockedSeatImage !== undefined) {
      return blockedSeatImage.tintColor;
    } else {
      return _styles.selectedSeatColor[seatData.type];
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    disabled: _styles.disableButton[seatData.type],
    onPress: () => {
      if (!isDisable) {
        onSeatSelect && onSeatSelect();
      } else if (seatData.isStatusChange) {
        onSeatSelect && onSeatSelect();
      }
    },
    style: {
      height: seatData.type === 'driver' ? 35 : isSleeperLayout ? _styles.seatheight[seatData.type] : seatHeightConst,
      width: seatData.type === 'driver' ? 35 : seatWidthConst,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, seatData.type !== 'emptySpace' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: getSourceImage(),
    style: _styles.imgBackgroundStyle,
    imageStyle: {
      tintColor: getTintColorImage(),
      alignSelf: 'center'
    },
    resizeMode: "cover"
  }, seatData.type !== 'driver' && seatData.type === 'booked' && seatData.isStatusChange && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.bookinmgSeatNumberStyle, numberTextStyle]
  }, seatData.seatNo))));
};
const areEqual = (prevProps, nextProps) => {
  const {
    seatData
  } = nextProps;
  const {
    seatData: prevData
  } = prevProps;
  const isSelectedEqual = seatData === prevData;
  return isSelectedEqual;
};
var _default = /*#__PURE__*/_react.default.memo(Seat, areEqual);
exports.default = _default;
//# sourceMappingURL=Seat.js.map