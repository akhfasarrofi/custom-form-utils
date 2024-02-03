import Cookies from 'js-cookie';

/**
 * Function to remove a cookie by key.
 *
 * @param {string} key - The key of the cookie to be removed.
 */

const removeCookies = (key: string): void => {
  Cookies.remove(key);
};

export default removeCookies;
