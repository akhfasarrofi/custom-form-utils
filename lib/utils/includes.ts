/**
 * Checks if a value is present in an array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to search.
 * @param {T} value - The value to search for.
 * @param {number} [fromIndex] - The index to start searching from. Default is 0.
 * @returns {boolean} - Returns `true` if the value is found, else `false`.
 */
function includes<T>(array: T[], value: T, fromIndex: number = 0): boolean {
  for (let i = fromIndex; i < array.length; i += 1) {
    if (array[i] === value) {
      return true
    }
  }
  return false
}

export default includes
