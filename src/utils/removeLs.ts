import * as SecureLS from 'secure-ls';
import isClient from './isClient';

/**
 * This function removes a specific item from local storage using a given key and secret key.
 * It uses the SecureLS library to securely interact with the local storage with AES encryption.
 *
 * @param {string} key - The key of the data to remove from local storage.
 * @param {string} secret_key - The secret key used for AES encryption.
 *
 * @returns {void} This function does not return anything. If the environment is not a client-side, it does nothing.
 */
const removeLs = (key: string, secret_key: string): void => {
  if (isClient) {
    const storage = new SecureLS({
      encodingType: 'aes',
      encryptionSecret: secret_key,
    });
    storage.remove(key);
  }
};

export default removeLs;
