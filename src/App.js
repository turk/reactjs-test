import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';

function App() {
    return (
        <Fragment>
            <Router>

              <Link to="/">Home </Link>
              <Link to="/product">Product </Link>
              <Link to="/login">Login </Link>
                <Switch>
                    <PrivateRoute path='/product'>
                        Product Page
                    </PrivateRoute>

                    <Route exact path='/'>
                        Home Page
                    </Route>

                    <Route exact path='/login'>
                        Login Page
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
