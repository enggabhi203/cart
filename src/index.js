import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import initState from './store/initstate';
//For redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import giantReducer from './reducers/giantReducer'



const middleware = applyMiddleware(logger)
const store = createStore(giantReducer, initState, middleware);
console.log("Initial state :", store.getState());

// store.subscribe(() => {
//     console.log("Store changed in the store.subscribe :", store.getState())
// })

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


var obj = {
    a: 10,
    b: 20,
    c: function() {
        setTimeout(() => {
            console.log(this.a)}, 1000)
    }
}
obj.c()
