import React from 'react';
import { TextStyle } from 'react-native';
import type { AvaiableSeat, BlockedSeat, DriverSeat, SeatLayout } from '../types';
export interface SeatContainerProps {
    item: Array<SeatLayout>;
    index: number;
    disableSeat: boolean;
    isSleeperLayout?: boolean;
    onSeatSelected?: (seat: SeatLayout) => void;
    seatImage?: AvaiableSeat;
    driverImage?: DriverSeat;
    blockedSeatImage?: BlockedSeat;
    numberTextStyle?: TextStyle;
}
declare const _default: React.NamedExoticComponent<SeatContainerProps>;
export default _default;
