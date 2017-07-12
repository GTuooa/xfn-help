import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, Home, Ktbs }from 'app/containers'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
    </Route>
)
