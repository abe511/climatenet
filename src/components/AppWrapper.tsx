import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const AppWrapper: React.FC<object> = (): ReactElement => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
