import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import customStore from 'app/stores/store'
import Reducers from 'app/reducers'
import CreateRouter from 'app/containers/app.js'
import './index.less'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', () => {
        FastClick.attach(document.body)
    }, false)
}


let store = customStore(Reducers)

ReactDOM.render(
    <Provider  store={store}>
        <CreateRouter />
    </Provider>,
    document.getElementById('root')
)
