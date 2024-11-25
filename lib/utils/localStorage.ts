import encryption from './encryption'
import isEmpty from './isEmpty'

/**
 * A utility object for interacting with the browser's local storage securely.
 */
const secureLS = {
  /**
   * Function to get data from local storage.
   * @param {string} name - The name of the data to be retrieved.
   * @param {string} key - The key to be used for decryption.
   */
  get: (name: string, key: string) => {
    const data = localStorage.getItem(encryption.encryptWithMD5(name, key))

    let state
    if (!isEmpty(data)) {
      const result = encryption.decryptWithAES(data!, key)
      try {
        state = JSON.parse(result)
      }
      catch {
        state = result
      }

      return state
    }

    return state
  },
  /**
   * Function to set data in local storage.
   * @param {string} name - The name of the data to be stored.
   * @param {string} data - The data to be stored.
   */
  set: (name: string, data: string, key: string): void => {
    return localStorage.setItem(
      encryption.encryptWithMD5(name, key),
      encryption.encryptWithAES(data, key),
    )
  },
  /**
   * Function to remove data from local storage.
   * @param {string} name - The name of the data to be removed.
   */
  remove: (name: string, key: string): void => {
    return localStorage.removeItem(encryption.encryptWithMD5(name, key))
  },
  /**
   * Function to clear all data from local storage.
   */
  clear: (): void => {
    localStorage.clear()
  },
}

export default secureLS
