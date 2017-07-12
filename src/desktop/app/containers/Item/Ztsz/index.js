import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Ztsz extends React.Component {
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
            <div style={{display:currentId=='2' ? '' : 'none',float:'left'}}>
                <div className='help-center'>
					<header>
                        帐套设置
                        <span>
                            {isPC ? '查看移动端：' : '查看PC端：'}
                            <Switch checked={isPC} onChange={()=>this.setState({isPC: !isPC})}/>
                        </span>
                    </header>
					<div className='content'>
						<div className='item'>
							<h3 id='itemOne'>一、新增账套</h3>
							<div className='content-inner'>
								<div>
									<p className='blod'>关于账套类型及解释：</p>
                                    <ul className='list'>
                                        <li>
                                            <span className='blod'>演示账套：</span>
                                            含演示数据，建议新用户新增以了解小番财务各项功能。
                                        </li>
                                        <li>
                                            <span className='blod'>小企业账套：</span>
                                            预置符合国家《小企业会计准则》的科目架构，并可添加、修改、删除子科目以及辅助核算。
                                        </li>
                                        <li>
                                            <span className='blod'>空账套：</span>
                                            无任何预置内容，适用于从其他财务软件中将数据批量导入至小番财务中。
                                        </li>
                                    </ul>
                                    <p className='blod'>关于账套角色及解释：</p>
                                    <ul className='list'>
                                        <li>
                                            <span className='blod'>管理员：</span>
                                            是指拥有完全操作权限的人（可删除账套），建议财务主管、记账会计等角色可拥有该权限。
                                        </li>
                                        <li>
                                            <span className='blod'>记账员：</span>
                                            是指拥有部分操作权限的人，可查看、录入、修改、删除凭证，但没有凭证审核、反审核权限。建议记账会计、出纳等设置为该角色。
                                        </li>
                                        <li>
                                            <span className='blod'>观察员：</span>
                                            是指拥有部分操作权限的人，可以查看所有数据，但不能进行任何修改。建议将财务合伙人、部门主管等设置为该角色。
                                        </li>
                                    </ul>
                                    <p>首页 => “账套设置” => “新增” => 编辑账套信息 => “保存”</p>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_A_001.png':''}/>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_A_002.png':''}/>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_A_003.png':''}/>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_A_004.png':''}/>
											<p>第四步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_A_005.png':''}/>
											<p>第五步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/desktop/ZTSZ/ZTSZ_A_001.png':''}/>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
    									<img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/desktop/ZTSZ/ZTSZ_A_002.png':''}/>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
    									<img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/desktop/ZTSZ/ZTSZ_A_003.png':''}/>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第二部分*/}
						<div className='item'>
							<h3 id='itemTwo'>二、修改账套信息</h3>
							<div className='content-inner'>
								<div>
									<p className='step'>
										<span></span>
										<span>首页 => “账套设置” => 点击需要修改的账套 => 修改账套信息 => “保存”</span>
									</p>
									<ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
                                            <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_B_001.png':''}/>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_B_002.png':''}/>
											<p>第二步</p>
										</li>
									</ul>
									<ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_B_003.png':''}/>
											<p>第三步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/desktop/ZTSZ/ZTSZ_B_001.png':''}/>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/desktop/ZTSZ/ZTSZ_B_002.png':''}/>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第三部分*/}
						<div className='item'>
							<h3 id='itemThree'>三、删除账套</h3>
							<div className='content-inner'>
								<p className='describe pleft'>删除账套后，数据不可恢复，建议谨慎删除，可在删除前备份数据</p>
								<p className='describe pleft'>
                                    首页 => “账套设置” => “选择” => 选择需要删除的账套 => “继续删除请勾选” => “删除” => ”确定”
                                </p>
								<hr></hr>
                                <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                    <li>
                                        <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_C_001.png':''}/>
                                        <p>第一步</p>
                                    </li>
                                    <li>
                                        <Icon type="arrow-right"/>
                                    </li>
                                    <li>
                                        <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_C_002.png':''}/>
                                        <p>第二步</p>
                                    </li>
                                </ul>
                                <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                    <li>
                                        <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_C_003.png':''}/>
                                        <p>第三步</p>
                                    </li>
                                    <li>
                                        <Icon type="arrow-right"/>
                                    </li>
                                    <li>
                                        <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_C_004.png':''}/>
                                        <p>第四步</p>
                                    </li>
                                </ul>
                                <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                    <li>
                                        <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_C_005.png':''}/>
                                        <p>第五步</p>
                                    </li>
                                </ul>
                                <div className='pimg' style={{display:isPC?'':'none'}}>
                                    <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/desktop/ZTSZ/ZTSZ_C_001.png':''}/>
                                    <div className='arrow'>
                                        <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                    </div>
                                </div>
                                <div className='pimg' style={{display:isPC?'':'none'}}>
                                    <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/desktop/ZTSZ/ZTSZ_C_002.png':''}/>
                                </div>
							</div>
						</div>
                        <hr></hr>
                        {/*第四部分*/}
						<div className='item'>
							<h3 id='itemFour'>四、切换账套</h3>
							<div className='content-inner'>
								<p className='describe pleft'>“首页”中点击账套名称，进行账套切换</p>
								<hr></hr>
                                <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                    <li>
                                        <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_D_001.png':''}/>
                                        <p>第一步</p>
                                    </li>
                                    <li>
                                        <Icon type="arrow-right"/>
                                    </li>
                                    <li>
                                        <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/mobile/ZTSZ/ZTSZ_D_002.png':''}/>
                                        <p>第二步</p>
                                    </li>
                                </ul>
                                <div className='pimg' style={{display:isPC?'':'none'}}>
                                    <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/desktop/ZTSZ/ZTSZ_D_001.png':''}/>
                                    <div className='arrow'>
                                        <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                    </div>
                                </div>
                                <div className='pimg' style={{display:isPC?'':'none'}}>
                                    <img src={currentId=='2' ? 'http://xfncwhelp.image.alimmdn.com/desktop/ZTSZ/ZTSZ_D_002.png':''}/>
                                </div>
							</div>
						</div>
					</div>
				</div>
				<div className='help-right'>
					<Anchor affix={true} offsetTop={100}>
						<Link href="#itemOne" title="新增帐套"/>
						<Link href="#itemTwo" title="修改账套信息"/>
						<Link href="#itemThree" title="删除账套" />
                        <Link href="#itemFour" title="切换账套" />
					</Anchor>
				</div>
            </div>
        )
    }
}
