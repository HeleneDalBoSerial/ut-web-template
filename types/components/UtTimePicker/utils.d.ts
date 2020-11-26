export declare type TimeComponent = 'hours' | 'seconds' | 'minutes';
export interface Time {
    hours: string;
    minutes: string;
    seconds: string;
}
export declare const timeRegex: RegExp;
export declare const isValidTime: (value: any) => boolean;
export declare const decomposeTime: (time: string) => Time;
export declare const dateToTimeString: (date: string | number | Date) => string;
export declare const timeToString: (time: Time) => string;
export declare const formatNumber: (value: string) => string;
