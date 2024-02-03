import xorStrings from './xor-string';

/**
 * Decrypts a message using the Vernam Cipher.
 * @param ciphertext - The encrypted message.
 * @param key - The key used for decryption.
 * @returns The decrypted message.
 *
 * @example
 * // Example usage:
 * const encryptedMessage = '...'; // Replace with an actual encrypted message
 * const key = '...'; // Replace with the corresponding key
 * const decryptedMessage = decrypt(encryptedMessage, key);
 * console.log(`Encrypted Message: ${encryptedMessage}`);
 * console.log(`Key: ${key}`);
 * console.log(`Decrypted Message: ${decryptedMessage}`);
 */
const decrypt = (ciphertext: string, key: string): string => {
  if (
    !ciphertext ||
    !key ||
    typeof ciphertext !== 'string' ||
    typeof key !== 'string' ||
    ciphertext.length !== key.length
  ) {
    throw new Error('Invalid input');
  }

  return xorStrings(ciphertext, key);
};

export default decrypt;
