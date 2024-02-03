import axios, { AxiosInstance } from 'axios';
import isEmpty from './isEmpty';

/**
 * Makes a POST request to the specified URL with the provided request body and returns the response data.
 *
 * @typeparam T - The type of the request body.
 * @typeparam R - The type of the expected response data.
 * @param {string} url - The URL to make the POST request to.
 * @param {T} body - The request body to include in the POST request.
 * @param {AxiosInstance} [apiClient] - Optional Axios instance to use for the request.
 * @returns {Promise<R>} A Promise that resolves to the response data of type R.
 * @throws {Error} If the URL is invalid, if the request body is empty, or if a network or server error occurs.
 */
const postRequest = async <T extends Record<string, unknown>, R>(
  url: string,
  body: T,
  apiClient?: AxiosInstance
): Promise<R> => {
  if (isEmpty(body)) {
    throw new Error('Missing body parameter');
  }

  try {
    const client = apiClient || axios;
    const { data } = await client.post(url, body);

    return data;
  } catch (error) {
    throw new Error('Network or server error occurred');
  }
};

export default postRequest;
