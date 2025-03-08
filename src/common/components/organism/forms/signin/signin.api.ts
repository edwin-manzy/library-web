import { apiFetch } from 'src/common/helpers/api/api-fetch';
import { SigninResponse } from './signin.types';

export const apiSignin = async (email: string, password: string): Promise<void> => {
  // const { prom, res, rej } = 
  const result = await apiFetch<SigninResponse>('/account/signin', {
    credentials: 'include',
    body: JSON.stringify({ email, password })
  });

  console.log(result);
};
