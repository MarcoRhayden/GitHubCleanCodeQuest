import { UserReposModel } from '@/domain/models/github/user-repos-model';

export interface IGetUserRepos {
  getUserRepos: (params: GetUserRepos.Params) => Promise<GetUserRepos.Model>;
}

export namespace GetUserRepos {
  export type Params = {
    userName: string;
  };
  export type Model = {
    repos: UserReposModel[];
  };
}
