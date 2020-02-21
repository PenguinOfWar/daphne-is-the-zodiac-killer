import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import configureStore from './stores/store';

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import './sass/index.scss';

const history = createHistory();

const initialState = {};

const AppLoader = (
  <Provider store={configureStore({ initialState, history })}>
    <Router history={history}>
      <Route path="*" component={props => <App {...props} />} />
    </Router>
  </Provider>
);

ReactDOM.render(AppLoader, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
