import moment from 'moment';

export type TimeComponent = 'hours' | 'seconds' | 'minutes';
export interface Time {
  hours: string;
  minutes: string;
  seconds: string;
}

export const timeRegex = /^(\d?\d):(\d?\d):(\d?\d)$/;
export const isValidTime = (value: any) => timeRegex.test(value);
export const decomposeTime = (time: string): Time => {
  const match: any = (time).match(timeRegex);
  return {
    hours: match ? match[1] : undefined,
    minutes: match ? match[2] : undefined,
    seconds: match ? match[3] : undefined,
  };
};

export const dateToTimeString = (date: Date | string | number): string => {
  const momentObj = moment(date);
  return `${momentObj.hours()}:${momentObj.minutes()}:${momentObj.seconds()}`;
};

const ranges: { [x: string]: {max: number, min: number} } = {
  hours: { min: 0, max: 23 },
  minutes: { min: 0, max: 59 },
  seconds: { min: 0, max: 59 },
};

const clamp = (timeComponent: TimeComponent, value: number) => {
  if (value < ranges[timeComponent].min) {
    return ranges[timeComponent].max;
  }
  if (value > ranges[timeComponent].max) {
    return ranges[timeComponent].min;
  }
  return value;
};

export const timeToString = (time: Time): string => (
  `${clamp('hours', +time.hours)}:${clamp('minutes', +time.minutes)}:${clamp('seconds', +time.seconds)}`
);

export const formatNumber = (value: string) => (value.length === 1 ? `0${value}` : `${value}`);
