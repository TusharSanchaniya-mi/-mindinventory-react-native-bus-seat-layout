/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, ImageBackground, Dimensions, Text } from 'react-native';
import { layoutImage, selectedSeatColor, seatheight, disableButton, imgBackgroundStyle, bookinmgSeatNumberStyle } from '../styles';
export const seatHeightConst = 45;
export const seatSleeperHeightConst = 85;
export const seatWidthConst = Dimensions.get('screen').width / 6 - 20;
const Seat = _ref => {
  let {
    seatData,
    isDisable,
    isSleeperLayout,
    seatImage = undefined,
    driverImage = undefined,
    blockedSeatImage = undefined,
    numberTextStyle,
    onSeatSelect
  } = _ref;
  const getSourceImage = () => {
    if (seatData.type === 'driver' && driverImage != undefined) {
      return driverImage.image;
    } else if ((seatData.type === 'available' || seatData.type === 'women' || seatData.type === 'booked') && seatImage !== undefined) {
      return seatImage.image;
    } else if (seatData.type === 'blocked' && blockedSeatImage !== undefined) {
      return blockedSeatImage.image;
    } else {
      return layoutImage[seatData.type];
    }
  };
  const getTintColorImage = () => {
    if (seatData.type === 'driver' && driverImage !== undefined) {
      return driverImage.tintColor;
    } else if (seatData.type === 'available' && seatImage !== undefined) {
      return seatImage.tintColor;
    } else if (seatData.type === 'women') {
      return selectedSeatColor[seatData.type];
    } else if (seatData.type === 'booked') {
      return selectedSeatColor[seatData.type];
    } else if (seatData.type === 'blocked' && blockedSeatImage !== undefined) {
      return blockedSeatImage.tintColor;
    } else {
      return selectedSeatColor[seatData.type];
    }
  };
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    disabled: disableButton[seatData.type],
    onPress: () => {
      if (!isDisable) {
        onSeatSelect && onSeatSelect();
      } else if (seatData.isStatusChange) {
        onSeatSelect && onSeatSelect();
      }
    },
    style: {
      height: seatData.type === 'driver' ? 35 : isSleeperLayout ? seatheight[seatData.type] : seatHeightConst,
      width: seatData.type === 'driver' ? 35 : seatWidthConst,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, seatData.type !== 'emptySpace' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImageBackground, {
    source: getSourceImage(),
    style: imgBackgroundStyle,
    imageStyle: {
      tintColor: getTintColorImage(),
      alignSelf: 'center'
    },
    resizeMode: "cover"
  }, seatData.type !== 'driver' && seatData.type === 'booked' && seatData.isStatusChange && /*#__PURE__*/React.createElement(Text, {
    style: [bookinmgSeatNumberStyle, numberTextStyle]
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
export default /*#__PURE__*/React.memo(Seat, areEqual);
//# sourceMappingURL=Seat.js.map