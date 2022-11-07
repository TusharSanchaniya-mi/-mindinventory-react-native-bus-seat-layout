import React from 'react';
import { TextStyle } from 'react-native';
import type { AvaiableSeat, BlockedSeat, DriverPosition, DriverSeat, Layout, SeatLayout, SelectedSeats } from './types';
export interface SeatsLayoutProps {
    row: number;
    layout: Layout;
    driverPosition?: DriverPosition;
    isSleeperLayout?: boolean;
    maxSeatToSelect?: number;
    selectedSeats?: Array<SelectedSeats>;
    seatImage?: AvaiableSeat;
    blockedSeatImage?: BlockedSeat;
    driverImage?: DriverSeat;
    numberTextStyle?: TextStyle;
    getBookedSeats?: (seats: Array<SeatLayout>) => void;
}
declare const _default: React.NamedExoticComponent<SeatsLayoutProps>;
export default _default;
