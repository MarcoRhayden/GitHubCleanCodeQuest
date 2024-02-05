import { userInfoAtom } from '../components/atoms/atoms';
import { Props } from '../user-info';

import { throttle } from 'lodash';

import { useRecoilState } from 'recoil';

export const useUserInfo = ({ github }: Props) => {
  const [userInfoState, setUserInfoState] = useRecoilState(userInfoAtom);

  const fetchUserInformation = async (userName: string) => {
    try {
      setUserInfoState(old => ({ ...old, loading: true }));

      const [userInfo, userRepos] = await Promise.all([
        github.user.getUserInfo({ userName }),
        github.repos.getUserRepos({ userName }),
      ]);
    } catch (err) {
      setUserInfoState(old => ({ ...old, loading: false }));
    }
  };

  return {
    loading: userInfoState.loading,
    fetchUserInformationThrottled: throttle(fetchUserInformation, 500),
  };
};
