import { mockUserInfo } from '../../domain/mocks/user-info-mock';

import {
  GetUserInfo,
  IGetUserInfo,
} from '@/domain/usecases/github/get-user-info';

export class GetUserInfoSpy implements IGetUserInfo {
  userInfo = null;
  params: GetUserInfo.Params;
  callCount = 0;
  async getUserInfo(params: GetUserInfo.Params): Promise<GetUserInfo.Model> {
    if (!params.userName) return;
    this.userInfo = mockUserInfo();
    this.params = params;
    this.callCount++;
    return Promise.resolve(this.userInfo);
  }
}
