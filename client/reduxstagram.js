import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router } from 'react-router';
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import store, { history } from './store';
import './styles/style.styl';

const router = (
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(
  router,
  document.getElementById('root')
);
