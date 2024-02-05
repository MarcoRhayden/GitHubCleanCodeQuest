import { GetUserRepoRemote } from '@/data/usecases/github/get-user-repos-remote';
import { IGetUserRepos } from '@/domain/usecases/github/get-user-repos';
import { EndpointGithub } from '@/main/constants/endpoints';
import { makeApiUrl } from '@/main/factories/http/api-url-factory';
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory';

export const makeGetUserReposRemote = (): IGetUserRepos => {
  return new GetUserRepoRemote(
    makeApiUrl(EndpointGithub.USERS),
    makeAxiosHttpClient(),
  );
};
