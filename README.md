# @mindinventory/react-native-booking-ticket [![](https://img.shields.io/npm/v/@mindinventory/react-native-tab-bar-interaction.svg)](https://www.npmjs.com/package/@mindinventory/react-native-tab-bar-interaction)

React Native Booking Ticket 

## Installation

```sh
npm install @mindinventory/react-native-booking-ticket
```
```sh
yarn add @mindinventory/react-native-booking-ticket
```

### Supported platform
- Android
- Ios

## Usage
```js
import SeatsLayout from "@mindinventory/react-native-booking-ticket";
```
# Props to use
| Parameter       | Type                              | Description                                                                         |
| --------------- | --------------------------------- | -----------                                                                         |
| row             | _number_                          | Set number of rows to draw seat layout.                                             |
| layout          | _Layout (Optional)_               | Default value `columnOne: 2` & `columnTwo: 2`.                                      |
| driverPosition  | _string (Optional)_               | Accepts string args among `left` or `right`. Default is `right`.                    |
| isSleeperLayout | _boolean (Optional)_              | Accepts boolean value either `true` or `false`. Default is `false`.                 |
| maxSeatToSelect | _number (Optional)_               | Allow uset to select maximum number of seats to book in one go. Default value `7`.  |
| selectedSeats   | _Array<SelectedSeats> (Optional)_ | Accepts value seatNumber `number` and seatType `number` which accepts value from (`booked` or `women` or `blocked`). Default its set to blank array.                                                                         |

## Contributing!

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License!

@mindinventory/react-native-booking-ticket [MIT-licensed](https://github.com/Mindinventory/react-native-stagger-view/blob/main/LICENSE).


### Let us know!

If you use our open-source libraries in your project, please make sure to credit us and Give a star to www.mindinventory.com

<p><h4>Please feel free to use this component and Let us know if you are interested to building Apps or Designing Products.</h4>
<a href="https://www.mindinventory.com/contact-us.php?utm_source=gthb&utm_medium=repo&utm_campaign=react-native-speed-view" target="__blank">
<img src="https://github.com/Sammindinventory/MindInventory/blob/main/hirebutton.png" width="203" height="43"  alt="app development">
</a>
