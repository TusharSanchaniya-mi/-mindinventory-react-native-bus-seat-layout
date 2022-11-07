import React from 'react';
import { View } from 'react-native';
import { disableButton, seatContainerStyle, viewBorderStyle } from '../styles';
import Seat from './Seat';
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
  return /*#__PURE__*/React.createElement(View, {
    style: [seatContainerStyle, index === 0 && viewBorderStyle]
  }, item.map(seat => {
    return /*#__PURE__*/React.createElement(Seat, {
      seatImage: seatImage,
      driverImage: driverImage,
      blockedSeatImage: blockedSeatImage,
      numberTextStyle: numberTextStyle,
      key: seat.id + Math.floor(Math.random() * 1000 + 1) + seat.type.toString(),
      isDisable: disableSeat || disableButton[seat.type] || !!seat.isSeatSeleced,
      seatData: seat,
      isSleeperLayout: isSleeperLayout,
      onSeatSelect: () => {
        onSeatSelected && onSeatSelected(seat);
      }
    });
  }));
};
export default /*#__PURE__*/React.memo(SeatContainer);
//# sourceMappingURL=SeatContainer.js.map