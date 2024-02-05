import { makeGetRepoInfoRemote } from '@/main/factories/usecases/github/get-repo-info-factory';
import { makeGetUserInfoRemote } from '@/main/factories/usecases/github/get-user-info-remote-factory';
import { makeGetUserReposRemote } from '@/main/factories/usecases/github/get-user-repos-remote-factory';
import { UserInfo } from '@/presentation/pages';

import React from 'react';

const MakeUserInfo: React.FC = () => {
  return (
    <UserInfo
      github={{
        user: makeGetUserInfoRemote(),
        repos: makeGetUserReposRemote(),
        repoInfo: makeGetRepoInfoRemote(),
      }}
    />
  );
};

export default MakeUserInfo;
