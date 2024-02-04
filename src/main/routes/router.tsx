import UserInfo from '@/presentation/pages/user-info/user-info';

import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/user-info" />} />
          <Route path="/user-info" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
