/**
 * Finds the first element in the array that satisfies the provided testing function.
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to search.
 * @param {Partial<T>} condition - The condition object to match.
 * @returns {T | undefined} - The first matching element, or undefined if no element matches the condition.
 */
function find<T>(array: T[], condition: Partial<T>): T | undefined {
  if (Object.keys(condition).length === 0) {
    return undefined
  }

  return array.find((item) => {
    return (Object.keys(condition) as Array<keyof T>).every(
      key => item[key] === condition[key],
    )
  })
}

export default find
