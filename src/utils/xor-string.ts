/**
 * Performs the XOR operation on two strings.
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @returns The result of the XOR operation.
 */
const xorStrings = (str1: string, str2: string): string => {
  let result = '';
  for (let i = 0; i < str1.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    result += String.fromCharCode(str1.charCodeAt(i) ^ str2.charCodeAt(i));
  }
  return result;
};

export default xorStrings;
