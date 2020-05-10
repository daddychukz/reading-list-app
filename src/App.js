import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookPage from './components/book/';
import LoginPage from './components/login/Login';
import { LoginContext } from './context/LoginContext';
import AuthContext from './context/AuthContext';

const App = () => {
  const { responseGoogle, profile } = useContext(LoginContext);
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Route exact path="/" render={props => (<LoginPage {...props} auth={{responseGoogle, profile}}/>)} />
          <div className="App">
            <Route exact path="/home" component={AuthContext(BookPage)} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
