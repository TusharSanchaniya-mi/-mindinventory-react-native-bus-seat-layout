"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewBorderStyle = exports.selectedSeatColor = exports.seatheight = exports.seatSize = exports.seatNumberStyle = exports.seatImageStyle = exports.seatContainerStyle = exports.marginHorizontal = exports.mainContainerStyle = exports.layoutImage = exports.instructionSeatLayout = exports.imgHeaderStyle = exports.imgBackgroundStyle = exports.disableButton = exports.borderWidth = exports.bookinmgSeatNumberStyle = exports.blokcedSeatStyle = exports.bgImageStyle = void 0;
var _Seat = require("./component/Seat");
const marginHorizontal = {
  booked: 2,
  available: 2,
  emptySpace: 2,
  door: 2,
  driver: 2,
  blocked: 2,
  women: 2
};
exports.marginHorizontal = marginHorizontal;
const disableButton = {
  booked: false,
  available: false,
  emptySpace: true,
  door: true,
  driver: true,
  blocked: true,
  women: false
};
exports.disableButton = disableButton;
const borderWidth = {
  booked: 0.5,
  available: 0.5,
  emptySpace: 0,
  door: 0.5,
  driver: 0.5,
  blocked: 0,
  women: 0.5
};
exports.borderWidth = borderWidth;
const seatSize = {
  booked: '90%',
  available: '90%',
  emptySpace: '90%',
  door: '85%',
  driver: '75%',
  blocked: '95%',
  women: '95%'
};
exports.seatSize = seatSize;
const selectedSeatColor = {
  booked: '#5FBB80',
  available: '#B2B2B2',
  emptySpace: 'transparent',
  door: 'skyblue',
  driver: '#696969',
  blocked: '#DC143C',
  women: '#EE96B4'
};
exports.selectedSeatColor = selectedSeatColor;
const seatheight = {
  booked: _Seat.seatSleeperHeightConst,
  available: _Seat.seatSleeperHeightConst,
  emptySpace: _Seat.seatHeightConst,
  door: _Seat.seatHeightConst,
  driver: _Seat.seatHeightConst,
  blocked: _Seat.seatSleeperHeightConst,
  women: _Seat.seatSleeperHeightConst
};
exports.seatheight = seatheight;
const layoutImage = {
  booked: require('./assets/seat.png'),
  available: require('./assets/seat.png'),
  emptySpace: require('./assets/seat.png'),
  door: require('./assets/seat.png'),
  driver: require('./assets/steer.png'),
  blocked: require('./assets/seat_blocked.png'),
  women: require('./assets/seat.png')
};
exports.layoutImage = layoutImage;
const seatContainerStyle = {
  flexDirection: 'row',
  margin: 5,
  justifyContent: 'space-evenly'
};
exports.seatContainerStyle = seatContainerStyle;
const viewBorderStyle = {
  borderColor: 'lightgray',
  borderBottomWidth: 1
};
exports.viewBorderStyle = viewBorderStyle;
const mainContainerStyle = {
  marginHorizontal: 5,
  borderWidth: 1,
  borderRadius: 20,
  borderColor: 'gray',
  backgroundColor: 'rgba(1,1,1,0.1)',
  padding: 10,
  height: '100%'
  // alignSelf: 'center',
  // justifyContent: 'center',
};
exports.mainContainerStyle = mainContainerStyle;
const instructionSeatLayout = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginHorizontal: 10
};
exports.instructionSeatLayout = instructionSeatLayout;
const bgImageStyle = {
  height: 40,
  width: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 5
};
exports.bgImageStyle = bgImageStyle;
const imgHeaderStyle = {
  height: '40%',
  width: '40%'
};
exports.imgHeaderStyle = imgHeaderStyle;
const seatImageStyle = {
  height: 40,
  width: 40,
  marginRight: 5
};
exports.seatImageStyle = seatImageStyle;
const seatNumberStyle = {
  textTransform: 'capitalize',
  marginRight: 5
};
exports.seatNumberStyle = seatNumberStyle;
const imgBackgroundStyle = {
  // height: seatSize[seatData.type],
  // width: seatSize[seatData.type],
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center'
};
exports.imgBackgroundStyle = imgBackgroundStyle;
const bookinmgSeatNumberStyle = {
  marginTop: -5,
  fontWeight: '500',
  fontSize: 8
};
exports.bookinmgSeatNumberStyle = bookinmgSeatNumberStyle;
const blokcedSeatStyle = {
  height: '45%',
  width: '45%'
};
exports.blokcedSeatStyle = blokcedSeatStyle;
//# sourceMappingURL=styles.js.map