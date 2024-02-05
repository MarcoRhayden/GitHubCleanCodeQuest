import { GetRepoInfoRemote } from '@/data/usecases/github/get-repo-info-remote';
import { IGetRepoInfo } from '@/domain/usecases/github/get-repo-info';
import { EndpointGithub } from '@/main/constants/endpoints';
import { makeApiUrl } from '@/main/factories/http/api-url-factory';
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory';

export const makeGetRepoInfoRemote = (): IGetRepoInfo => {
  return new GetRepoInfoRemote(
    makeApiUrl(EndpointGithub.REPOS),
    makeAxiosHttpClient(),
  );
};
