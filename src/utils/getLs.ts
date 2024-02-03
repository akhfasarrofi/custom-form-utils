import * as SecureLS from 'secure-ls';
import isClient from './isClient';

/**
 * This function retrieves a value from local storage using a given key and secret key.
 * It uses the SecureLS library to securely store the data with AES encryption.
 *
 * @param {string} key - The key of the data to retrieve from local storage.
 * @param {string} secret_key - The secret key used for AES encryption.
 *
 * @returns {string | null} The data retrieved from local storage. If the environment is not a client-side, it returns null.
 */

const getLs = (key: string, secret_key: string): string | null => {
  if (isClient) {
    const storage = new SecureLS({
      encodingType: 'aes',
      encryptionSecret: secret_key,
    });
    return storage.get(key);
  }
  return null;
};

export default getLs;
