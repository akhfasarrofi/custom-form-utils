import * as SecureLS from 'secure-ls';
import isClient from './isClient';

/**
 * This function sets a value in local storage using a given key and secret key.
 * It uses the SecureLS library to securely store the data with AES encryption.
 *
 * @param {string} key - The key under which the data will be stored in local storage.
 * @param {T} value - The data to be stored.
 * @param {string} secret_key - The secret key used for AES encryption.
 *
 * @returns {void} This function does not return anything. If the environment is not a client-side, it does nothing.
 */

const setLs = <T>(key: string, value: T, secret_key: string): void => {
  if (isClient) {
    const storage = new SecureLS({
      encodingType: 'aes',
      encryptionSecret: secret_key,
    });
    storage.set(key, value);
  }
};

export default setLs;
