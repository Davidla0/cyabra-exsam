import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/main.scss';
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter as Router } from "react-router-dom"
import RootCmp from './root-cmp';


ReactDOM.render(
        <Provider store={store}>
                <Router>
                        <RootCmp/>
                </Router>
        </Provider>,
        document.getElementById('root'));


