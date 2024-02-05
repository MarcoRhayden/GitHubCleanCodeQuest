import { UserInfoModel } from '../github/user-info-model';
import { UserReposModel } from '../github/user-repos-model';

export type UserCompleteInfoModel = UserInfoModel & {
  repositories: UserReposModel[];
};
