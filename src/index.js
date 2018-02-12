import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../reducers/rootReducer';
import App from './App';
import './App.scss';

const store = createStore(rootReducer);

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(App);
  });
}
