import React from 'react';
import { TextStyle } from 'react-native';
import type { AvaiableSeat, BlockedSeat, DriverSeat, SeatLayout } from '../types';
export interface SeatContainerProps {
    blockedSeatImage?: BlockedSeat;
    disableSeat: boolean;
    driverImage?: DriverSeat;
    index: number;
    isSleeperLayout?: boolean;
    item: Array<SeatLayout>;
    numberTextStyle?: TextStyle;
    onSeatSelected?: (seat: SeatLayout) => void;
    seatImage?: AvaiableSeat;
}
declare const _default: React.NamedExoticComponent<SeatContainerProps>;
export default _default;
