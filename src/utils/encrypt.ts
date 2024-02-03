import generateKey from './generate-key';
import xorStrings from './xor-string';

/**
 * Encrypts a message using the Vernam Cipher.
 * @param plaintext - The original message to encrypt.
 * @returns An object containing the ciphertext and the generated key.
 *
 * @example
 * // Example usage:
 * const message = 'Hello, World!';
 * const { ciphertext, key } = encrypt(message);
 * console.log(`Original Message: ${message}`);
 * console.log(`Key: ${key}`);
 * console.log(`Ciphertext: ${ciphertext}`);
 * console.log(`Decrypted Message: ${decrypt(ciphertext, key)}`);
 */
const encrypt = (plaintext: string): { ciphertext: string; key: string } => {
  if (!plaintext || typeof plaintext !== 'string') {
    throw new Error('Invalid input');
  }

  const key = generateKey(plaintext);
  const ciphertext = xorStrings(plaintext, key);

  return { ciphertext, key };
};

export default encrypt;
