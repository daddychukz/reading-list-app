import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './login.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginContextProvider from './context/LoginContext';
import NotificationContextProvider from './context/Notification';

ReactDOM.render(
  <React.StrictMode>
    <NotificationContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </NotificationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
