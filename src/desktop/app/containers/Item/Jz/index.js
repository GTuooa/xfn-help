import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Jz extends React.Component {
    static propTypes = {
		currentId: PropTypes.string
	}
    constructor() {
		super()
		this.state = {isPC: true}
	}
    render() {
        const { currentId } = this.props;
        const { isPC } = this.state;
        return (
            <div style={{display:currentId=='8' ? '' : 'none',float:'left'}}>
                <div className='help-center'>
					<header>
                         结账／反结账
                         <span>
                             {isPC ? '查看移动端：' : '查看PC端：'}
                             <Switch checked={isPC} onChange={()=>this.setState({isPC: !isPC})}/>
                         </span>
                    </header>
					<div className='content'>
						<div className='item'>
							<h3 id='itemEightOne'>一、结账</h3>
							<div className='content-inner'>
								<div>
                                    <ul className='list'>
                                        <li>
                                            使用 “结账”功能，将自动生成收益凭证／损失凭证。
                                        </li>
                                        <li>
                                            利润自动结转至 3103_本年利润 ；结账第12期，将自动将 3103_本年利润 结转至 310405_未分配利润。
                                        </li>
                                    </ul>
                                    <p className='describe pleft'>首页 => “结账” => “结账” => “确定”</p>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_003.png'></img>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_004.png'></img>
											<p>第四步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/JZ/JZ_A_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/JZ/JZ_A_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/JZ/JZ_A_003.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第二部分*/}
						<div className='item'>
							<h3 id='itemEightTwo'>二、反结账</h3>
							<div className='content-inner'>
								<div>
									<p className='step'>
										<span>反结账：</span>
										<span>首页 => “结账” => “反结账” => “确定”</span>
									</p>
									<ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_005.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_006.png'></img>
											<p>第二步</p>
										</li>
									</ul>
									<ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_007.png'></img>
											<p>第三步</p>
										</li>
                                        <li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_008.png'></img>
											<p>第四步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/JZ/JZ_A_004.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/JZ/JZ_A_005.png'></img>
    								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='help-right'>
					<Anchor affix={true} offsetTop={100}>
						<Link href="#itemEightOne" title="结账"/>
						<Link href="#itemEightTwo" title="反结账"/>
					</Anchor>
				</div>
            </div>
        )
    }
}
