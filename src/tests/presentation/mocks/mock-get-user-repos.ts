import { mockUserRepos } from '../../domain/mocks/user-repos-mock';

import {
  GetUserRepos,
  IGetUserRepos,
} from '@/domain/usecases/github/get-user-repos';

export class GetUserReposSpy implements IGetUserRepos {
  userRepos = null;
  params: GetUserRepos.Params;
  callCount = 0;
  async getUserRepos(params: GetUserRepos.Params): Promise<GetUserRepos.Model> {
    if (!params.userName) return;
    this.userRepos = mockUserRepos();
    this.params = params;
    this.callCount++;
    return Promise.resolve(this.userRepos);
  }
}
