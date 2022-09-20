import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';

import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import dotenv from 'dotenv';

import { authCredentials } from './auth';
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App';

import './index.css';

dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:4000";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain={authCredentials.domain} clientId={authCredentials.clientId} audience={authCredentials.audience} redirectUri={window.location.origin}>
      <Provider store={store}>
        <App />
      </Provider> 
    </Auth0Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals)
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
