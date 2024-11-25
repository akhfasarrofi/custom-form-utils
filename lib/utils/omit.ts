/**
 * Creates a new object by omitting specified keys from the source object.
 * @template T - The type of the source object.
 * @param {T} obj - The source object.
 * @param {keyof T[]} keysToOmit - An array of keys to omit from the source object.
 * @returns {Partial<T>} - A new object with the specified keys omitted.
 */

function omit<T>(obj: T, keysToOmit: (keyof T)[]): Partial<T> {
  const result: Partial<T> = {}

  Object.keys(obj as object).forEach((key: string) => {
    if (!keysToOmit.includes(key as keyof T)) {
      result[key as keyof T] = obj[key as keyof T]
    }
  })

  return result
}

export default omit
