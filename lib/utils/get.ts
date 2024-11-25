/**
 * Retrieves a value from an object using the specified path.
 * @template T - The type of the source object.
 * @template K - The type of the default value.
 * @param {T} obj - The source object.
 * @param {string} path - The path to retrieve the value from the object.
 * @param {K} defaultValue - The default value if the path is not found or results in an undefined value.
 * @returns {K} - The value found within the object based on the path, or the default value if the path is not found.
 */
function get<T extends object, K>(obj: T, path: string, defaultValue: K): K | undefined {
  const pathArray = path.split('.')
  let result: unknown = obj

  pathArray.forEach((key) => {
    if (
      result
      && typeof result === 'object'
      && key in (result as Record<string, unknown>)
    ) {
      result = (result as Record<string, unknown>)[key]
    }
    else {
      result = defaultValue
    }
  })

  return result !== undefined ? (result as K) : defaultValue
}

export default get
