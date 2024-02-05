import { mockRepoInfo } from '../../domain/mocks/repo-info-mock';

import {
  GetRepoInfo,
  IGetRepoInfo,
} from '@/domain/usecases/github/get-repo-info';

export class GetRepoInfoSpy implements IGetRepoInfo {
  repoInfo = mockRepoInfo();
  params: GetRepoInfo.Params;
  callCount = 0;
  async getRepoInfo(params: GetRepoInfo.Params): Promise<GetRepoInfo.Model> {
    this.params = params;
    this.callCount++;
    return Promise.resolve(this.repoInfo);
  }
}
