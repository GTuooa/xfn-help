import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { Icon,Container,ScrollView, Title,Row } from 'app/components'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'

@immutableRenderDecorator
export default
class HelpCenter extends React.Component {
	render() {
		return (
			<Container className="">
				<Title colors="0"/>
				<ScrollView flex="1" uniqueKey="help-scroll" savePosition>
					<div className='row'>
						<h3>用户使用手册</h3>
						<ul className='item-list'>
							<li>
								<span></span>
								<Link to='ktbs'>开通部署</Link>
							</li>
							<li>
								<span></span>
								<Link to='ztsz'>帐套设置</Link>
							</li>
							<li>
								<span></span>
								<Link to='kmsz'>科目设置</Link>
							</li>
							<li>
								<span></span>
								<Link to='fzhs'>辅助核算设置</Link>
								<Link to='all'>点击更多 >></Link>
							</li>
						</ul>
					</div>
				</ScrollView>
				<div className='footer'>
					<Link to='all'><Icon className="icon" type="fenlei" size="18" color="#fff"/></Link>
					<span>用户使用手册</span>
					<Link to='ktbs'><Icon className="icon" type="next" size="20" color="#fff"/></Link>
				</div>
			</Container>
		)
	}
}
