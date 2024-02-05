import MakeUserInfo from '@/main/factories/pages/user-info/user-info-factory';

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
          <Route path="/user-info" element={<MakeUserInfo />} />
          <Route path="/*" element={<MakeUserInfo />} />
          <Route path="/" element={<Navigate to="/user-info" />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
