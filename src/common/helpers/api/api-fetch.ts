import { produce } from 'immer';
import { API_STATUS } from 'src/common/constants/api';
import { ApiResponse } from 'src/common/interfaces/api';

import { SysError } from 'src/common/interfaces/errors';

export const apiFetch = async <T>(url: string, options: RequestInit = {}):
Promise<ApiResponse<T>> => {
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

  const fetchOptions = produce(options, (draft) => {
    if (!draft.credentials) {
      draft.credentials = 'include';
    }
    return draft;
  });

  const result = await fetch(fetchURL, fetchOptions)
    .then((res) => res.json() as Promise<ApiResponse<T>>);

  if (result.status ===  API_STATUS.SUCCESS) {
    result.unwrap = (): T => {
      return result.data;
    };
  } else {
    result.getError = (): SysError => {
      return result.data;
    };
  }

  return result;
};
