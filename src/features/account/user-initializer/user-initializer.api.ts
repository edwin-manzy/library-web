import { apiFetch } from 'src/common/helpers/api/api-fetch';
import { ApiResponse } from 'src/common/interfaces/api';
import { User } from 'src/common/interfaces/user';

export const getUser = async (): Promise<ApiResponse<{user: User | undefined}>> => {
  return await apiFetch<{user: User | undefined}>('/user/whoami');
};
