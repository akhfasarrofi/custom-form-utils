import dayjs, { Dayjs, ManipulateType } from 'dayjs';

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
 * @returns {string} The start of the specified time period in the specified format.
 * @example startOfTime("day", "YYYY-MM-DD") // Returns the start of the current day in YYYY-MM-DD format.
 */
const startOfTime = (type: ManipulateType, format: string): string => {
  return dayjs().startOf(type).format(format);
};

/**
 * Returns the end of a given time period in a specified format.
 * @param {ManipulateType} type The type of time period (e.g., 'day', 'month', 'year').
 * @param {string} format The desired output format for the date/time.
 * @returns {string} The end of the specified time period in the specified format.
 * @example endOfTime("day", "YYYY-MM-DD") // Returns the end of the current day in YYYY-MM-DD format.
 */
const endOfTime = (type: ManipulateType, format: string): string => {
  return dayjs().endOf(type).format(format);
};

/**
 * Formats a date or timestamp using the specified format.
 * @param {string} format The format to use for the returned date string (exp: YYYY-MM-DD)
 * @param {string} format The format to use.
 * @returns {string} The formatted date string.
 * @example formatDate("2022-02-20", "YYYY-MM-DD") // Returns "2022-02-20"
 */
const formatDate = (
  value: string | undefined | Dayjs | null | Date,
  format?: string
): string => {
  return dayjs(value).format(format);
};

/**
 * Returns the current date, formatted according to the provided format string.
 * @param {string} format The format string used to format the date. Follows the formatting rules of the dayjs library.
 * @returns {string} The current date, formatted according to the provided format string.
 * @example defaultDate("YYYY-MM-DD") // Returns the current date in YYYY-MM-DD format.
 */
const defaultDate = (format: string): string => {
  return dayjs().format(format);
};

/**
 * Returns the date/time of a future time period in a specified format.
 * @param {number} value The number of time periods to add.
 * @param {ManipulateType} type The type of time period (e.g., 'day', 'month', 'year').
 * @param {string} format The desired output format for the date/time.
 * @returns {string} The date/time of the future time period in the specified format.
 */
const nextTime = (
  value: number,
  type: ManipulateType,
  format: string
): string => {
  return dayjs().add(value, type).format(format);
};

/**
 * Returns the date/time of a past time period in a specified format.
 * @param {number} value The number of time periods to subtract.
 * @param {ManipulateType} type The type of time period (e.g., 'day', 'month', 'year').
 * @param {string} format The desired output format for the date/time.
 * @returns {string} The date/time of the past time period in the specified format.
 */
const lastTime = (
  value: number,
  type: ManipulateType,
  format: string
): string => {
  return dayjs().subtract(value, type).format(format);
};

export {
  fromNow,
  startOfTime,
  endOfTime,
  formatDate,
  defaultDate,
  nextTime,
  lastTime,
};
