/**
 * Checks if a character is an alphabet.
 * @param char - The character to check.
 * @returns True if the character is an alphabet, false otherwise.
 */
const isAlpha = (char: string): boolean => {
  return /^[a-zA-Z]+$/.test(char);
};

export default isAlpha;
