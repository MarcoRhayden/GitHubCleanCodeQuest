import { mockUserRepos } from '../../domain/mocks/user-repos-mock';

import {
  GetUserRepos,
  IGetUserRepos,
} from '@/domain/usecases/github/get-user-repos';

export class GetUserReposSpy implements IGetUserRepos {
  userRepos = mockUserRepos();
  params: GetUserRepos.Params;
  callCount = 0;
  async getUserRepos(params: GetUserRepos.Params): Promise<GetUserRepos.Model> {
    this.params = params;
    this.callCount++;
    return Promise.resolve(this.userRepos);
  }
}
