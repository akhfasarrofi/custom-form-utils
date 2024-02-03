import axios, { AxiosInstance } from 'axios';
import isEmpty from './isEmpty';

/**
 * Makes a GET request to the specified URL and returns the response data object.
 *
 * @typeparam R - The type of the expected response data.
 * @param {string} url - The URL to make the GET request to.
 * @param {AxiosInstance} [apiClient] - Optional Axios instance to use for the request.
 * @returns {Promise<R>} A Promise that resolves to the response data of type R.
 * @throws {Error} If the URL is invalid or if a network or server error occurs.
 */
const singleRequest = async <R>(
  url: string,
  apiClient?: AxiosInstance
): Promise<R> => {
  try {
    const client = apiClient || axios;

    const response = await client.get(url);
    const { data = {} } = response;
    const mapped = !isEmpty(data) ? data : {};

    return mapped;
  } catch (error) {
    throw new Error('Network or server error occurred');
  }
};

export default singleRequest;
