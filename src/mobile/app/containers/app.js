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
import { All, Ktbs, Ztsz, Kmsz, Fzhs, Lrpz, Cxpz, Ckbb, Jz, Bfsj, Sjdr, Dypz, Cjgl, Zcgl, Pzcg } from 'app/containers/Item'
import './app.less'

const CreateRouter = () => (
  <HashRouter history={history}>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/all" exact component={All} />
      <Route path="/ktbs" exact component={Ktbs} />
      <Route path="/ztsz" exact component={Ztsz} />
      <Route path="/kmsz" exact component={Kmsz} />
      <Route path="/fzhs" exact component={Fzhs} />
      <Route path="/lrpz" exact component={Lrpz} />
      <Route path="/cxpz" exact component={Cxpz} />
      <Route path="/ckbb" exact component={Ckbb} />
      <Route path="/jz"   exact component={Jz}   />
      <Route path="/bfsj" exact component={Bfsj} />
      <Route path="/sjdr" exact component={Sjdr} />
      <Route path="/dypz" exact component={Dypz} />
      <Route path="/cjgl" exact component={Cjgl} />
      <Route path="/zcgl" exact component={Zcgl} />
      <Route path="/pzcg" exact component={Pzcg} />
    </div>
  </HashRouter>
)

export default CreateRouter
