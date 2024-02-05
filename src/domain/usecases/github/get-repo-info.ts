import { RepoInfoModel } from '@/domain/models/github/repo-info-model';

export interface IGetRepoInfo {
  getRepoInfo: (params: GetRepoInfo.Params) => Promise<GetRepoInfo.Model>;
}

export namespace GetRepoInfo {
  export type Params = {
    repoFullName: string;
  };
  export type Model = {
    repoInfo: RepoInfoModel;
  };
}
