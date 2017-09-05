import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import SearchPage from './components/search/SearchPage';
import AdPage from './components/ad/AdPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchPage} />
    <Route path="search" component={SearchPage} />
    <Route path="ad/:id" component={AdPage} />

  </Route>
);