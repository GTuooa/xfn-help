import React from 'react'
import { connect } from 'react-redux'
import { Layout, Input } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import { Link } from 'react-router-dom'
import { Title, Icon } from 'app/components'
import * as homeActions from 'app/actions/home.action'
import 'antd/dist/antd.less'

import './style.less'
import HelpCenter from '../helpCenter'

@connect(state => state)
export default
class Home extends React.Component {
	render() {
		const {
			homeState,
			history,
			dispatch
		} = this.props
		return (
			<div>
				<Title colors="0"/>
				<HelpCenter
					homeState={homeState}
					dispatch={dispatch}
				/>
			</div>
		)
	}
}
