import Cookies from 'js-cookie';

import encryption from './encryption';
import isEmpty from './isEmpty';

interface ISetCookieOptions {
  /**
   * Define when the cookie will be removed. Value can be a Number
   * which will be interpreted as days from time of creation or a
   * Date instance. If omitted, the cookie becomes a session cookie.
   */
  expires?: number | Date;

  /**
   * Define the path where the cookie is available. Defaults to '/'
   */
  path?: string;

  /**
   * Define the domain where the cookie is available. Defaults to
   * the domain of the page where the cookie was created.
   */
  domain?: string;

  /**
   * A Boolean indicating if the cookie transmission requires a
   * secure protocol (https). Defaults to false.
   */
  secure?: boolean;

  /**
   * Asserts that a cookie must not be sent with cross-origin requests,
   * providing some protection against cross-site request forgery
   * attacks (CSRF)
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
   */
  sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None';

  /**
   * A Boolean indicating if the cookie transmission requires a
   * secure protocol (https). Defaults to false.
   */
  httpOnly?: boolean;
}

const secureCookies = {
  /**
   * Get a cookie
   * @param name Cookie name
   * @param key Cookie key
   * @returns Value
   */
  getItem: (name: string, key: string) => {
    const data = Cookies.get(encryption.encryptWithMD5(name, key));

    let state;
    if (!isEmpty(data)) {
      const result = encryption.decryptWithAES(data as string, key);
      try {
        state = JSON.parse(result);
      } catch (error) {
        state = result;
      }

      return state;
    }

    return undefined;
  },

  /**
   * Set a cookie
   * @param {string} name - Cookie name
   * @param {string} value - Value to set
   * @param {ISetCookieOptions} options - Cookie options
   * @param {string} key - Cookie key
   */
  set: (
    name: string,
    value: string,
    options: ISetCookieOptions,
    key: string
  ) => {
    return Cookies.set(
      encryption.encryptWithMD5(name, key),
      encryption.encryptWithAES(value, key),
      options
    );
  },

  /**
   * Remove a cookie
   * @param {string} name - Cookie name
   * @param {string} key - Cookie key
   */
  remove: (name: string, key: string) => {
    Cookies.remove(encryption.encryptWithMD5(name, key));
  },
};

export default secureCookies;
