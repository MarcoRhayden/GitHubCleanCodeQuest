import { userInfoAtom } from '../components/atoms/atoms';
import { Props } from '../user-info';

import { UserInfoModel } from '@/domain/models/github/user-info-model';
import { UserReposModel } from '@/domain/models/github/user-repos-model';
import { UserCompleteInfoModel } from '@/domain/models/user-info/user-complete-info-model';
import { throttle } from 'lodash';

import { useRecoilState } from 'recoil';

export const useUserInfo = ({ github }: Props) => {
  const [userInfoState, setUserInfoState] = useRecoilState(userInfoAtom);

  const combineUserInformation = (
    userInfo: UserInfoModel,
    userRepos: UserReposModel[],
  ): UserCompleteInfoModel => {
    return {
      ...userInfo,
      repositories: userRepos,
    };
  };

  const fetchUserInformation = async (userName: string) => {
    try {
      setUserInfoState(old => ({ ...old, loading: true }));

      const [userInfo, userRepos] = await Promise.all([
        github.user.getUserInfo({ userName }),
        github.repos.getUserRepos({ userName }),
      ]);

      setUserInfoState(old => ({
        ...old,
        userData: combineUserInformation(userInfo, userRepos),
        loading: false,
      }));
    } catch (err) {
      setUserInfoState(old => ({ ...old, loading: false, userData: null }));
    }
  };

  const throttledFetchUserInformation = throttle(
    () => fetchUserInformation(userInfoState.searchContent),
    500,
  );

  return {
    loading: userInfoState.loading,
    fetchUserInformationThrottled: throttledFetchUserInformation,
    userData: userInfoState.userData as UserCompleteInfoModel,
    userInfoState,
    setUserInfoState,
  };
};
