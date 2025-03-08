import { ApiResponse } from 'src/common/interfaces/api';

export const apiFetch = async <T>(url: string, options: RequestInit): Promise<ApiResponse<T>> => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  let fetchURL = import.meta.env.VITE_APP_API_URL as string ?? '';

  if (fetchURL.endsWith('/')) {
    fetchURL = fetchURL.substring(0, fetchURL.length - 1);
  }

  if (!fetchURL.endsWith('/api')) {
    fetchURL += '/api';
  }

  if (!url.startsWith('/')) {
    fetchURL = '/' + url;
  } else {
    fetchURL += url;
  }

  const result = await fetch(fetchURL, options)
    .then((res) => res.json() as Promise<ApiResponse<T>>);

  return result;
};
