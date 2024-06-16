import 'dayjs/locale/id';

import dayjs, { Dayjs, type ManipulateType } from 'dayjs';

dayjs.locale('id');

/**
 * Converts a timestamp to a human-readable relative time.
 * @param {number | string} timestamp The timestamp to convert.
 * @returns {string} The relative time string.
 * @example fromNow(1624368000000) // Returns "just now" if the timestamp is less than 1 minute ago.
 */
const fromNow = (timestamp: number | string): string => {
  const now: number = new Date().getTime();
  const then: number = new Date(timestamp).getTime();
  const diff: number = now - then;

  if (diff < 60000) {
    return 'just now';
  }
  if (diff < 3600000) {
    const minutes: number = Math.floor(diff / 60000);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  if (diff < 86400000) {
    const hours: number = Math.floor(diff / 3600000);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  if (diff < 604800000) {
    const days: number = Math.floor(diff / 86400000);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
  if (diff < 2592000000) {
    const weeks: number = Math.floor(diff / 604800000);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  }
  if (diff < 5184000000) {
    const months = Math.floor(diff / 2592000000);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
  return 'more than 2 months ago';
};

/**
 * Returns the start of a given time period in a specified format.
 * @param {ManipulateType} type The type of time period (e.g., 'day', 'month', 'year').
 * @param {string} format The desired output format for the date/time.
 * @returns The resulting date after adding the specified value of the given type.
 */
const startDate = (type: ManipulateType, format?: string): string => {
  if (format) {
    return dayjs().startOf(type).format(format);
  }
  return dayjs().startOf(type).format(format);
};

/**
 * Returns the end of a given time period in a specified format.
 * @param {ManipulateType} type The type of time period (e.g., 'day', 'month', 'year').
 * @param {string} format The format to use.
 * @returns The resulting date after adding the specified value of the given type.
 */
const endDate = (type: ManipulateType, format?: string) => {
  if (format) {
    return dayjs().endOf(type).format(format);
  }
  return dayjs().endOf(type);
};

/**
 * Formats a date or timestamp using the specified format.
 * @param {string} format The format to use for the returned date string (exp: YYYY-MM-DD)
 * @param {string} format The format to use.
 * @returns The resulting date after adding the specified value of the given type.
 */
const dates = (
  value: string | undefined | Dayjs | null | Date,
  format?: string
) => {
  if (format) {
    return dayjs(value).format(format);
  }
  return dayjs(value);
};

/**
 * Returns the date/time of a past time period in a specified format.
 * @param {number} value The number of time periods to subtract.
 * @param {ManipulateType} type The type of time period (e.g., 'day', 'month', 'year').
 * @returns The resulting date after adding the specified value of the given type.
 */
const substract = (value: number, type: ManipulateType, format?: string) => {
  if (format) {
    return dayjs().subtract(value, type).format(format);
  }
  return dayjs().subtract(value, type);
};

/**
 * Adds a specified value of a given type to the current date and returns the result.
 * @param value - The value to add.
 * @param type - The type of manipulation to perform on the date.
 * @param format - (Optional) The format string to use when formatting the resulting date.
 * @returns The resulting date after adding the specified value of the given type.
 */
const addDate = (value: number, type: ManipulateType, format?: string) => {
  if (format) {
    return dayjs().add(value, type).format(format);
  }

  return dayjs().add(value, type);
};

export { addDate, dates, endDate, fromNow, startDate, substract };
