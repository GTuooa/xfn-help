import React from 'react'
import {
  HashRouter,
  Route,
  Link,
  Prompt,
  BrowserRouter
} from 'react-router-dom'

import createHistory from 'history/createHashHistory'
const  history = createHistory()
const  location = history.location
import Home from './Home'
import './app.less'

const CreateRouter = () => (
  <HashRouter history={history}>
    <div>
      <Route path="/" exact component={Home} />
    </div>
  </HashRouter>
)

export default CreateRouter
