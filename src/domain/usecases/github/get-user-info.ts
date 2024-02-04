import { UserInfoModel } from '@/domain/models/github/user-info-model';

export interface IGetUserInfo {
  getUserInfo: (params: GetUserInfo.Params) => Promise<GetUserInfo.Model>;
}

export namespace GetUserInfo {
  export type Params = {
    userName: string;
  };
  export type Model = {
    userInfo: UserInfoModel;
  };
}
