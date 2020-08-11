import React from 'react'
import {Router} from "react-router-dom";
import { createStore } from "redux";
import appReducers from "./reducers/Reducers";
import {loadUser} from "./actions/AuthActions";
import history from "./history";
import AuthWrapper from "./base/AuthWrapper";
import {getRoutes} from "./route";
import Provider from "react-redux/es/components/Provider";
import BaseLayout from "./base/BaseLayout";

const store = createStore(appReducers);

store.dispatch(loadUser());

const App = () => (

    <Provider store={ store }>
        <Router history={history}>
            <AuthWrapper>
                <BaseLayout>
                    {
                        getRoutes()
                    }
                </BaseLayout>
            </AuthWrapper>
        </Router>
    </Provider>
);

export default App;
