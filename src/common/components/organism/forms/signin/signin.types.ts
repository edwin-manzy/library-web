import { ApiResponse } from 'src/common/interfaces/api';
import { User } from 'src/common/interfaces/user';

export interface SigninResponse { token: string };

export type SigninApiResponse = ApiResponse<User>;
