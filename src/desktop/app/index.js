import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import customStore from 'app/stores/store'
import Reducers from 'app/reducers'
import CreateRouter from 'app/containers/app.js'
import { browser } from 'app/utils'

function path (){
        if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {
            window.location.href = "http://www.fannix.com.cn/xfn/support/mobile/app/index.html"
        }
}
path ();
let store = customStore(Reducers)

ReactDOM.render(
    <Provider  store={store}>
        <CreateRouter />
    </Provider>,
    document.getElementById('root')
)
