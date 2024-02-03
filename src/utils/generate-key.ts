import isAlpha from './isAlpha';

/**
 * Generates a random key for the Vernam Cipher based on the length of the given message.
 * @param message - The message for which the key is generated.
 * @returns The generated key.
 * @example
 * // Example usage:
 * const message = 'Hello, World!';
 * const key = generateKey(message);
 * console.log(`Original Message: ${message}`);
 */
const generateKey = (message: string): string => {
  const key = [];
  for (let i = 0; i < message.length; i += 1) {
    const randomCharCode =
      Math.floor(Math.random() * 26) +
      (isAlpha(message[i]) && message[i].toLowerCase() === message[i]
        ? 97
        : 65);
    key.push(String.fromCharCode(randomCharCode));
  }
  return key.join('');
};

export default generateKey;
