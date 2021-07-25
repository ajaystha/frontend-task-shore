import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Users } from '../pages/Users';

import './App.css';

const App: FC = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>

      <Grid item xs={10}>
        <Header />

        <Router>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/users" />
            </Route>

            <Route path="/users" exact>
              <Users />
            </Route>

            <Route path="*">
              <Redirect to="/users" />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </Grid>
  );
};

export default App;
