import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Ktbs extends React.Component {
    static propTypes = {
		currentId: PropTypes.string
	}
    render() {
        const { currentId } = this.props;
        return (
            <div style={{display:currentId=='1' ? '' : 'none',float:'left'}} >
                <div className='help-center'>
					<header>开通部署</header>
					<div className='content'>
						<div className='item'>
							<h3 id='xfn'>一、部署小番财务</h3>
							<div className='content-inner'>
								<div>
									<p>企业团队主管理员或有应用添加权限的子管理员需使用钉钉手机版在钉钉应用市场内抢开“小番财务”（每天上午十点开抢）或扫描以下二维码：</p>
									<div className='QR-code'>
										<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_001.png' ></img>
										<p>小番财务”部署安装二维码</p>
									</div>
								</div>
								<hr></hr>
								<div>
									<p className='step' id='stepOne'>
										<span>示例1</span>
										<span> 已有一个激活团队:钉钉管理员）授权并开通 => 设置可见范围 => 确认开通</span>
									</p>
									<ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_002.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_003.png'></img>
											<p>第二步</p>
										</li>
									</ul>
									<ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_004.png'></img>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_005.png'></img>
											<p>第四步</p>
										</li>
									</ul>
									<ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_006.png'></img>
											<p>第五步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_007.png'></img>
											<p>第六步</p>
										</li>
									</ul>
								</div>
								<hr></hr>
								<div>
									<p className='step' id='stepTwo'>
										<span>示例2</span>
										<span>已有多个激活团队:（钉钉管理员）选择团队 => 授权并开通 => 设置可见范围 => 确认开通</span>
									</p>
									<ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_008.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_009.png'></img>
											<p>第二步</p>
										</li>
									</ul>
									<ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_010.png'></img>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_011.png'></img>
											<p>第四步</p>
										</li>
									</ul>
									<ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_012.png'></img>
											<p>第五步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_013.png'></img>
											<p>第六步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_014.png'></img>
											<p>第七步</p>
										</li>
									</ul>
								</div>
								<hr></hr>
								<div>
									<p className='step' id='stepThree'>
										<span>示例3</span>
										<span>尚未有激活团队：创建团队 => （钉钉管理员）授权并开通 => 设置可见范围 => 确认开通</span>
									</p>
									<ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_015.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_016.png'></img>
											<p>第二步</p>
										</li>
									</ul>
									<ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_017.png'></img>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_018.png'></img>
											<p>第四步</p>
										</li>
									</ul>
									<ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_019.png'></img>
											<p>第五步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_020.png'></img>
											<p>第六步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix'>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_021.png'></img>
											<p>第七步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/KTBS_B_022.png'></img>
											<p>第八步</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<hr></hr>
						<div className='item'>
							<h3 id='visual'>二、设置可见范围</h3>
							<div className='content-inner'>
								<p className='describe pleft'>不在使用范围内的员工无法在钉钉“工作”界面看到“小番财务”应用图标。如需修改员工使用范围，需登录钉钉管理后台应用中心设置，链接：
                                    <a href='https://oa.dingtalk.com/#/login' target='_blank'>https://oa.dingtalk.com/#/login</a>
                                </p>
								<p className='describe pleft'>在“企业应用”中，点击“小番财务” => “设置” => ”可见范围”，更改“小番财务”的使用权限</p>
								<hr></hr>
								<div className='pimg'>
									<img src='http://xfncwhelp.image.alimmdn.com/mobile/KTBS/设置可见范围.png'></img>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='help-right'>
					<Anchor affix={true} offsetTop={100} >
						<Link href="#xfn" title="部署小番财务">
                            <Link href="#stepOne" title="已有一个激活团队" />
                            <Link href="#stepTwo" title="已有多个激活团队" />
                            <Link href="#stepThree" title="尚未有激活团队" />
                        </Link>
						<Link href="#visual" title="设置可见范围" />
					</Anchor>
				</div>
            </div>
        )
    }
}
