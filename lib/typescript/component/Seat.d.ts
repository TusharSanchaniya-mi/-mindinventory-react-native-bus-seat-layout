import React from 'react';
import { TextStyle } from 'react-native';
import type { AvaiableSeat, BlockedSeat, DriverSeat, SeatLayout } from '../types/index';
export interface SeatProps {
    blockedSeatImage?: BlockedSeat;
    driverImage?: DriverSeat;
    isDisable: boolean;
    isSleeperLayout?: boolean;
    numberTextStyle?: TextStyle;
    onSeatSelect?: () => void;
    seatData: SeatLayout;
    seatImage?: AvaiableSeat;
}
export declare const seatHeightConst = 45;
export declare const seatSleeperHeightConst = 85;
export declare const seatWidthConst: number;
declare const _default: React.NamedExoticComponent<SeatProps>;
export default _default;
