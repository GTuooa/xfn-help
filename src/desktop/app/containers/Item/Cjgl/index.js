import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Cjgl extends React.Component {
    static propTypes = {
		currentId: PropTypes.string,
	}

    render() {
        const { currentId } = this.props;
        return (
            <div style={{display:currentId=='12' ? '' : 'none',float:'left'}}>
                <div className='help-center'>
					<header>超级管理</header>
					<div className='content'>
						<div className='item'>
							<h3 id='itemTwelveOne'>一、查看套餐信息</h3>
							<div className='content-inner'>
								<div>
                                    <ul className='list'>
                                        <li>
                                            使用此功能由公司的钉钉企业管理员（点击通讯录-组织架构即可看到）进行操作
                                        </li>
                                    </ul>
                                    <p className='describe pleft'>
                                        首页=>“帐套设置” =>“超级管理” =>查看到期时间、最大账套数、增值功能
                                    </p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_A_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_A_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_A_003.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第二部分*/}
						<div className='item'>
							<h3 id='itemTwelveTwo'> 二、增值包申请试用</h3>
							<div className='content-inner'>
								<div>
									<p className='describe pleft'>
										首页=>“帐套设置” =>“超级管理” =>“申请试用”
									</p>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_B_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_B_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_B_003.png'></img>
    								</div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/*第三部分*/}
						<div className='item'>
							<h3 id='itemTwelveThree'> 三、删除帐套</h3>
							<div className='content-inner'>
								<div>
									<p className='describe pleft'>
                                        首页=>“帐套设置” =>“超级管理” =>点击“x”图标 =>输入需要删除的帐套名称 => “删除”
									</p>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_C_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_C_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_C_003.png'></img>
                                        <div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_C_004.png'></img>
                                        <div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_C_005.png'></img>
    								</div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/*第四部分*/}
						<div className='item'>
							<h3 id='itemTwelveFour'> 四、获取任意账套管理员权限</h3>
							<div className='content-inner'>
								<div>
									<p className='describe pleft'>
										首页=>“帐套设置” =>“超级管理” =>“将我设为管理员”
									</p>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_D_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_D_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/CJGL/CJGL_D_003.png'></img>
    								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='help-right'>
					<Anchor affix={true} offsetTop={100}>
						<Link href="#itemTwelveOne" title="查看套餐信息"/>
						<Link href="#itemTwelveTwo" title="增值包申请试用"/>
                        <Link href="#itemTwelveThree" title="删除帐套"/>
                        <Link href="#itemTwelveFour" title="获取任意账套管理员权限"/>
					</Anchor>
				</div>
            </div>
        )
    }
}
