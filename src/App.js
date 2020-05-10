import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookPage from './components/book/';
import LoginPage from './components/login/Login';
import NotificationContextProvider from './context/Notification';

const App = () => {
  return (
    <Router>
      <NotificationContextProvider>
        <Route exact path="/" component={LoginPage} />
      </NotificationContextProvider>
      <div className="App">
        <Route exact path="/home" component={BookPage} />
      </div>
    </Router>
  );
}

export default App;
