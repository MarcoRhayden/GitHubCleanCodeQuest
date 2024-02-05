import { GetUserInfoRemote } from '@/data/usecases/github/get-user-info-remote';
import { IGetUserInfo } from '@/domain/usecases/github/get-user-info';
import { EndpointGithub } from '@/main/constants/endpoints';
import { makeApiUrl } from '@/main/factories/http/api-url-factory';
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory';

export const makeGetUserInfoRemote = (): IGetUserInfo => {
  return new GetUserInfoRemote(
    makeApiUrl(EndpointGithub.USERS),
    makeAxiosHttpClient(),
  );
};
