import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "../reducers/rootReducer";
import HelloWorld from "./Hello_World";
import "./App.scss";

const store = createStore(rootReducer);

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root"),
  );
};

renderApp(HelloWorld);

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp(HelloWorld);
  });
}
