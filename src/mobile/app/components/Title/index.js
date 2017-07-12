import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import './Title.less'
import 'app/index.less'


@immutableRenderDecorator
export default
class Title extends React.Component {
    static propTypes = {
		colors: PropTypes.string
	}
    render() {
        const { colors } = this.props;
        return (
                <ul className="header-list">
                    {/* <li><Link to='/sjzt' style={{color: colors=='2' ? '#5ec9f6' : ''}}>帮助中心</Link></li> */}
                    <li ><Link to='/' style={{borderBottom:colors=='0' ? '0.02rem solid #38adff':'',paddingBottom:'0.1rem'}}>帮助中心</Link></li>
                </ul>
        )
    }
}
