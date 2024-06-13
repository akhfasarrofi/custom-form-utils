import CryptoJS from 'crypto-js';

const encryption = {
  /**
   * Function to encrypt text with MD5.
   * @param {string} text - The text to be encrypted.
   * @param {string} key - The key to be used for encryption.
   * @returns {string} The MD5 encrypted string.
   */
  encryptWithMD5: (text: string, key: string): string => {
    return CryptoJS.MD5(text + key).toString();
  },

  /**
   * Function to encrypt text with AES.
   * @param {string} text - The text to be encrypted.
   * @param {string} key - The key to be used for encryption.
   * @returns {string} The AES encrypted string.
   */
  encryptWithAES: (text: string, key: string): string => {
    return CryptoJS.AES.encrypt(text.toString(), key).toString();
  },

  /**
   * Function to decrypt AES ciphertext.
   * @param {string} ciphertext - The AES ciphertext to be decrypted.
   * @param {string} key - The key to be used for decryption.
   * @returns {string} The decrypted text.
   */
  decryptWithAES: (ciphertext: string, key: string): string => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    let originalText;
    try {
      originalText = bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      originalText = bytes.toString();
    }
    return originalText;
  },
};

export default encryption;
