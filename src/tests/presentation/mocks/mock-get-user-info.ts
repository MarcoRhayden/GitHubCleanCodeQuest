import { mockUserInfo } from '../../domain/mocks/user-info-mock';

import {
  GetUserInfo,
  IGetUserInfo,
} from '@/domain/usecases/github/get-user-info';

export class GetUserInfoSpy implements IGetUserInfo {
  userInfo = mockUserInfo();
  params: GetUserInfo.Params;
  callCount = 0;
  async getUserInfo(params: GetUserInfo.Params): Promise<GetUserInfo.Model> {
    this.params = params;
    this.callCount++;
    return Promise.resolve(this.userInfo);
  }
}
