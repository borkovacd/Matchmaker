import React from "react";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import appReducers from "./reducers/Reducers";
import { loadUser } from "./actions/AuthActions";
import history from "./history";
import AuthWrapper from "./base/AuthWrapper";
import { getRoutes } from "./route";
import Provider from "react-redux/es/components/Provider";
import BaseLayout from "./base/BaseLayout";
import { getHomeData } from "./services/HomeService";
import { loadData } from "./actions/SiteDataActions";
import { OK } from "http-status-codes";

const store = createStore(appReducers);
store.dispatch(loadUser());

load();

if ("ontouchstart" in document.documentElement) {
  document.body.style.cursor = "pointer";
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <AuthWrapper>
        <BaseLayout>{getRoutes()}</BaseLayout>
      </AuthWrapper>
    </Router>
  </Provider>
);

function load() {
  getHomeData().then(response => {
    if (response.status !== OK) {
      return;
    }

    store.dispatch(
      loadData(response.data.languages ? response.data.languages : [])
    );
  });
}

export default App;
