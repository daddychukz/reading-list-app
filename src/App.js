import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookPage from './components/book/';
import LoginPage from './components/login/Login';
import { LoginContext } from './context/LoginContext';
import AuthContext from './context/AuthContext';
import Navigation from './components/Navbar';
import NotFound from './components/NotFound';

const App = () => {
  const { responseGoogle, profile } = useContext(LoginContext);
  return (
    <Router>
      <Navigation showLogout={localStorage.getItem('email') ? true : false}/>
      <Switch>
          <Route exact path="/" render={props => (<LoginPage {...props} auth={{responseGoogle, profile}}/>)} />
          <Route exact path="/home" component={AuthContext(BookPage)} />
          <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
