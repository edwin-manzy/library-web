import { API_STATUS } from 'src/common/constants/api';
import { SysError } from 'src/common/interfaces/errors';

export type ApiStatus = typeof API_STATUS;

export type ApiResponseSuccess<T> = {
  data: T,
  unwrap: () => T;
  status:  ApiStatus['SUCCESS'],
};

export type ApiResponseFailed = {
  data: SysError,
  getError: () => SysError;
  status: ApiStatus['FAILED'],
};


export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseFailed
