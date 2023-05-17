import { DateTime } from 'luxon';

export const screenWidthbreakpoints = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};

export const getTimeDifference = (createdDatetime: string) => {
  // Possible units in miliseconds
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const UNITS: any = {
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    year: 24 * 60 * 60 * 1000 * 365,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };

  // Create Intl realtive time element to format the time difference
  const relativeTime = new Intl.RelativeTimeFormat('en-US', { style: 'long' });

  // Parse post date time into date object
  const date1 = new Date(createdDatetime);

  // Get current date time in utc timezone.
  const utcDate = DateTime.local().setZone('utc');
  const date2 = new Date(utcDate);

  // Get miliseconds difference between dates
  const dateDifferences = date1 - date2;

  // Itinerate over all units anc check witch one should be returned
  for (const u in UNITS) // eslint-disable-line
    if (Math.abs(dateDifferences) > UNITS[u] || u === 'second') {
      return relativeTime.format(
        Math.round(dateDifferences / UNITS[u]),
        <'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'>u,
      );
    }

  return 'now';
};
