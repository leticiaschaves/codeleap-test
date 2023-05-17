import React from "react";
import store from "./redux/store";
import Router from "./router/router";
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
