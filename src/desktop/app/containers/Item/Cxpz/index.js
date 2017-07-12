import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Cxpz extends React.Component {
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
            <div style={{display:currentId=='6' ? '' : 'none',float:'left'}}>
                <div className='help-center'>
					<header>
                        查询凭证
                        <span>
                            {isPC ? '查看移动端：' : '查看PC端：'}
                            <Switch checked={isPC} onChange={()=>this.setState({isPC: !isPC})}/>
                        </span>
                    </header>
					<div className='content'>
						<div className='item'>
							<h3 id='itemSixOne'>一、查看凭证详情</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>
                                        首页 => “查询凭证” => 点击凭证 => 查看凭证详情 => “修改” => 修改凭证 => “保存”
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_A_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_A_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_A_003.png'></img>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_A_004.png'></img>
											<p>第四步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_A_001.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_A_002.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_A_003.png'></img>
                                    </div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/* 第二部分 */}
                        <div className='item'>
							<h3 id='itemSixTwo'>二、审核／反审核</h3>
							<div className='content-inner'>
								<div>
                                    <ul className='list'>
                                        <li>
                                            仅管理员可对未结账凭证进行审核。
                                        </li>
                                        <li>
                                            凭证一经审核，带有审核图标且不可修改、删除。
                                        </li>
                                        <li>
                                            审核一经反审核，无审核图标，可修改、删除。
                                        </li>
                                    </ul>
                                    <p className='describe pleft'>
                                        审核：首页 => “查询凭证” => 点击凭证 => 查看凭证详情 => “审核”
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_003.png'></img>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_004.png'></img>
											<p>第四步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_001.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_002.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_003.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_004.png'></img>
                                    </div>
                                    <hr></hr>
                                    <p className='describe pleft'>
                                        反审核：首页 => “查询凭证” => 点击凭证 => 查看凭证详情 => “反审核”
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_005.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_006.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_005.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_006.png'></img>
                                    </div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/* 第三部分 */}
                        <div className='item'>
							<h3 id='itemSixThree'>三、删除凭证</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>
                                        首页 => “查询凭证” => “选择” => 勾选需要删除的凭证 => “删除” => “确定”
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_C_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_C_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_C_003.png'></img>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_C_004.png'></img>
											<p>第四步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_C_001.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_C_002.png'></img>
                                    </div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/* 第四部分 */}
                        <div className='item'>
							<h3 id='itemSixFour'>四、整理凭证</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>
                                        首页 => “查询凭证” => “整理” => “按凭证号顺次前移补齐断号”／“按凭证日期重新顺次编号”
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_D_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_D_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_D_001.png'></img>
                                    </div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className='help-right'>
					<Anchor affix={true} offsetTop={100}>
						<Link href="#itemSixOne" title="查看凭证详情"/>
                        <Link href="#itemSixTwo" title="审核／反审核"/>
                        <Link href="#itemSixThree" title="删除凭证"/>
                        <Link href="#itemSixFour" title="整理凭证"/>
					</Anchor>
				</div>
            </div>
        )
    }
}
