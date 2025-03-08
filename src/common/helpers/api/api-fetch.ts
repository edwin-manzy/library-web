import { ApiResponse } from 'src/common/interfaces/api';

export const apiFetch = async <T>(url: string, options: RequestInit): Promise<ApiResponse<T>> => {
  const baseURL = process.env.REACT_APP_API_URL ?? '';
  const result = await fetch(baseURL + url, options)
    .then((res) => res.json() as Promise<ApiResponse<T>>);

  return result;
};
