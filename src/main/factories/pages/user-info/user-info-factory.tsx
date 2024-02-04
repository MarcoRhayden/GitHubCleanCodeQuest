import { makeGetUserInfoRemote } from '@/main/factories/usecases/github/get-user-info-remote-factory';
import { UserInfo } from '@/presentation/pages';

import React from 'react';

const MakeUserInfo: React.FC = () => {
  return (
    <UserInfo
      github={{
        user: makeGetUserInfoRemote(),
      }}
    />
  );
};

export default MakeUserInfo;
