import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';

import Head from './Head';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './Home'),
  loading: () => <div>Loading...</div>
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ './about/About'),
  loading: () => <div>Loading...</div>
});

const App = () => (
  <div className="app">
    <Head />
    <h1>SpaceX Launch Pograms</h1>
    <main className="main">
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route path="/about" component={LoadableAbout} />
      </Switch>
    </main>

    <footer>
      <h3>
        Created By Anas Khalid -- UI/UX Developer. Hire me for awesome UI/UX !!
        experience!!
      </h3>
    </footer>
  </div>
);

export default App;
