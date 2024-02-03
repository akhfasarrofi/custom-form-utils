import axios, { AxiosInstance } from 'axios';
import isEmpty from './isEmpty';

/**
 * Makes a GET request to the specified URL and returns the response data array.
 *
 * @typeparam R - The type of the expected response data.
 * @param {string} url - The URL to make the GET request to.
 * @param {Record<string, string | number>} [params] - Optional parameters to include in the request.
 * @param {AxiosInstance} [apiClient] - Optional Axios instance to use for the request.
 * @returns {Promise<R>} A Promise that resolves to the response data of type R.
 * @throws {Error} If the URL is invalid or if a network or server error occurs.
 */
const listRequest = async <R>(
  url: string,
  params?: Record<string, string | number>,
  apiClient?: AxiosInstance
): Promise<R> => {
  try {
    const client = apiClient ?? axios;
    const response = await client.get(url, { params });
    const { data = [] } = response;
    const mapped = !isEmpty(data) ? data : [];

    return mapped;
  } catch (error) {
    throw new Error('Network or server error occurred');
  }
};

export default listRequest;
