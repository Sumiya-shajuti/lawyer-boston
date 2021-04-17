import React from 'react';
import { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import LogIn from './components/LogIn/LogIn';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>{loggedInUser.name}</h1>
      <div>
        <div className="Header">

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
                <LogIn></LogIn>
              </Route>
              {/* <Route path="*">
                <NotFound></NotFound>
              </Route> */}
      </Switch>
    </Router>
    </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
