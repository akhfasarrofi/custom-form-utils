import * as SecureLS from 'secure-ls';
import isClient from './isClient';

/**
 * This function clears all data from local storage.
 * It uses the SecureLS library to securely interact with the local storage with AES encryption.
 *
 * @param {string} secret_key - The secret key used for AES encryption.
 *
 * @returns {void} This function does not return anything. If the environment is not a client-side, it does nothing.
 */
const clearLs = (secret_key: string): void => {
  if (isClient) {
    const storage = new SecureLS({
      encodingType: 'aes',
      encryptionSecret: secret_key,
    });
    storage.clear();
  }
};

export default clearLs;
