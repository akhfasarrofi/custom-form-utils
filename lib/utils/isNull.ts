/**
 * Checks if a value is null.
 *
 * @param {T} value - The value to check.
 * @returns {boolean} Returns true if the value is null, else false.
 */
const isNull = <T>(value: T): boolean => {
  return value === null;
};

export default isNull;
