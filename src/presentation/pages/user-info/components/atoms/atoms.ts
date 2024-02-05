import { UserCompleteInfoModel } from '@/domain/models/user-info/user-complete-info-model';

import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {
    loading: false,
    userData: null as UserCompleteInfoModel,
    searchContent: '',
  },
  effects_UNSTABLE: [persistAtom],
});
