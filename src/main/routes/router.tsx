import UserInfo from '@/main/presentation/pages/user-info/user-info';

import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <BrowserRouter basename="/cleancode-quest">
        <Routes>
          <Route path="/user-info" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
