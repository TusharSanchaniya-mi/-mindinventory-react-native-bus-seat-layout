import type { ColorValue } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
export declare type SeatType = 'available' | 'blocked' | 'booked' | 'door' | 'driver' | 'emptySpace' | 'women';
export declare type SelectedSeatType = 'booked' | 'women' | 'blocked';
export declare type SeatImageAssetsType = 'available' | 'blocked' | 'booked' | 'driver' | 'women';
export interface SeatLayout {
    id: string;
    isSeatSeleced?: boolean;
    isStatusChange?: boolean;
    seatNo?: number;
    type: SeatType;
}
export interface Layout {
    columnOne: number;
    columnTwo: number;
}
export interface SelectedSeats {
    seatNumber: number;
    seatType: SelectedSeatType;
}
export declare type DriverPosition = 'left' | 'right';
export interface AvaiableSeat {
    image: string | ImageSourcePropType;
    tintColor: ColorValue | undefined;
}
export interface BlockedSeat {
    image: string | ImageSourcePropType;
    tintColor: ColorValue | undefined;
}
export interface DriverSeat {
    image: string | ImageSourcePropType;
    tintColor: ColorValue | undefined;
}
