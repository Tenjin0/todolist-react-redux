import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import TodoStore from "./TodoStore";
import TodoList from "./components/Todo/index";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css';

declare global {
    // tslint:disable-next-line:interface-name
    interface Window {
        axios: any;
        store: any;
    }
}

import * as axios from "axios";

window.axios = axios;
window.store = TodoStore;
render(
    <Provider store={TodoStore}>
        <TodoList />
    </Provider>,
    document.getElementById("root") as Element
);

if (process && process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept();
}
