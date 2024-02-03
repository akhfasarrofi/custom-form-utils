import Cookies from 'js-cookie';

/**
 * Function to get a cookie value by key.
 *
 * @param {string} key - The key of the cookie.
 * @returns {string | undefined} The value of the cookie, or undefined if the cookie does not exist.
 */

const getCookies = (key: string): string | undefined => {
  return Cookies.get(key);
};

export default getCookies;
