import React from 'react';
import { TextStyle } from 'react-native';
import type { AvaiableSeat, BlockedSeat, DriverPosition, DriverSeat, Layout, SeatLayout, SelectedSeats } from './types';
export interface SeatsLayoutProps {
    blockedSeatImage?: BlockedSeat;
    driverImage?: DriverSeat;
    driverPosition?: DriverPosition;
    getBookedSeats?: (seats: Array<SeatLayout>) => void;
    isSleeperLayout?: boolean;
    layout: Layout;
    maxSeatToSelect?: number;
    numberTextStyle?: TextStyle;
    row: number;
    seatImage?: AvaiableSeat;
    selectedSeats?: Array<SelectedSeats>;
}
declare const _default: React.NamedExoticComponent<SeatsLayoutProps>;
export default _default;
