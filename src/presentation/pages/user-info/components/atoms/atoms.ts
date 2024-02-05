import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {
    loading: false,
    userInfo: null,
  },
  effects_UNSTABLE: [persistAtom],
});
