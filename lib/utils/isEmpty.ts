/**
 * Checks if the given value is empty.
 * @param value The value to check.
 * @returns Returns `true` if the given value is empty, else `false`.
 */

const isEmpty = <T>(value: T): boolean => {
  // if value was null or undefined, then return true
  if (value == null || typeof value === 'undefined') {
    return true;
  }

  // if value was na object, then check if it has any keys
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  // if value was an array, then check if it has any items
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  // if value was a string, then check if it has any characters
  if (typeof value === 'string') {
    return value.length === 0;
  }

  // if value was a number, then check if it is 0
  if (typeof value === 'number') {
    return value === 0;
  }

  return false;
};

export default isEmpty;
