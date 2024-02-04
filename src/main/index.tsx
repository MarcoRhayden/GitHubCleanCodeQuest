import Router from '@/main/routes/router';
import '@/presentation/styles/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('main'),
);
