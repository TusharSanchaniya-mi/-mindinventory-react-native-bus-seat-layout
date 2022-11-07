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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

@mindinventory/react-native-booking-ticket [MIT-licensed](https://github.com/Mindinventory/react-native-stagger-view/blob/main/LICENSE).


### Let us know!

We’d be really happy if you send us links to your projects where you use our component. Just send an email to sales@mindinventory.com And do let us know if you have any questions or suggestion regarding our work.

## 📌 Credits :

This project is made possible by the community surrounding it and especially the wonderful people. Rendering a list is basically clone form this repo [GitHub Repo](https://github.com/TusharSanchaniya-mi/mi-react-native-seat-layout/)