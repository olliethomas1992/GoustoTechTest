import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers.js";
import Routes from "./routes";

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(promise)
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#app")
);