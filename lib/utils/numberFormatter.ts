/**
 * Formats a number according to the specified format.
 * @param value - The number to format.
 * @param format - The format to use for formatting the number.
 * @returns The formatted number as a string.
 */
const numberFormatter = (value: number, format: 'id-ID' | 'en-EN') => {
  return value.toLocaleString(format);
};

export default numberFormatter;
