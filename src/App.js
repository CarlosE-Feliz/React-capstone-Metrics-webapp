import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './App.css';
import Details from './components/Details';
import Home from './components/Home';
import NavBar from './components/nav';
import { getCoin } from './redux/coinsAPI';

function App() {
  const dispatch = useDispatch();
  const loadCoinsAction = bindActionCreators(getCoin, dispatch);
  useEffect(() => {
    loadCoinsAction();
  }, []);
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Details">
              <Details />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    </>

  );
}

export default App;
