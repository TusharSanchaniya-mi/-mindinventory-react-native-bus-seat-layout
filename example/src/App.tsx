import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SeatsLayout from '@mindinventory/react-native-booking-ticket';
// import { DriverIcon, SeatIcon, SleeperSeatIcon } from '../assets';

export default function App() {
  return (
    <SafeAreaView>
      <SeatsLayout
        row={14}
        layout={{ columnOne: 3, columnTwo: 2 }}
        driverPosition="right"
        selectedSeats={[
          //   { seatNumber: 1, seatType: 'booked' },
          { seatNumber: 1, seatType: 'booked' },
          { seatNumber: 11, seatType: 'women' },
          { seatNumber: 17, seatType: 'women' },
          { seatNumber: 43, seatType: 'blocked' },
        ]}
        numberTextStyle={styles.numberStyle}
        // seatImage={{ image: SeatIcon, tintColor: '#B2B2B2' }}
        // driverImage={{ image: DriverIcon, tintColor: 'red' }}
        // blockedSeatImage={{image: DriverIcon, tintColor:'red'}}
        // getBookedSeats={(seats) => {
        // console.log('>>>>>>', seats);
        // }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  numberStyle: { fontSize: 12 },
});
