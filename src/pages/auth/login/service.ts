import { LoginRequest, LoginResponse } from './data.d';

import request from '@/utils/request';

const URL = '/auth/login';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return request.post(URL, data);
};
