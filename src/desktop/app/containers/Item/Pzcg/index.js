import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Bfsj extends React.Component {
    static propTypes = {
		currentId: PropTypes.string,
	}

    render() {
        const { currentId } = this.props;
        return (
            <div style={{display:currentId=='14' ? '' : 'none',float:'left'}}>
                <div className='help-center'>
					<header>凭证草稿</header>
					<div className='content'>
						<div className='item'>
							<h3 id='itemFourteenOne'>一、暂存为草稿</h3>
							<div className='content-inner'>
								<div>
                                    <ul className='list'>
                                        <li>
                                            暂存的草稿均保存在草稿箱中，草稿经修改保存为凭证后，该条凭证自动从草稿箱中删除
                                        </li>
                                    </ul>
                                    <p className='describe pleft'>首页=>“录入凭证”=>“暂存”</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_A_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_A_002.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第二部分*/}
						<div className='item'>
							<h3 id='itemFourteenTwo'> 二、查看草稿箱</h3>
							<div className='content-inner'>
								<div>
									<p className='describe pleft'>首页=>“录入凭证”=>“草稿箱”</p>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_B_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_B_002.png'></img>
    								</div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/*第三部分*/}
                        <div className='item'>
							<h3 id='itemFourteenThree'> 三、锁定凭证</h3>
							<div className='content-inner'>
								<div>
                                    <ul className='list'>
                                        <li>
                                            在录入凭证页面点击草稿箱，可将暂存的草稿锁定，相当于凭证模版，被锁定的凭证可以反复修改保存，不会在草稿箱中删除
                                        </li>
                                    </ul>
									<p className='describe pleft'>首页=>“录入凭证”=>“草稿箱”=> 勾选某一草稿 => “锁定”</p>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_C_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_C_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_C_003.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_C_004.png'></img>
    								</div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/*第四部分*/}
                        <div className='item'>
							<h3 id='itemFourteenFour'> 四、解锁凭证</h3>
							<div className='content-inner'>
								<div>
                                    <ul className='list'>
                                        <li>
                                            锁定的草稿可解锁后变为暂存的草稿
                                        </li>
                                    </ul>
									<p className='describe pleft'>首页=>“录入凭证”=>“草稿箱”=> 勾选某一已锁定的草稿 => “解锁”</p>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_D_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_D_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_D_003.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZCG/PZCG_D_004.png'></img>
    								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='help-right'>
					<Anchor affix={true} offsetTop={100}>
						<Link href="#itemFourteenOne" title="暂存为草稿"/>
						<Link href="#itemFourteenTwo" title="查看草稿箱"/>
                        <Link href="#itemFourteenThree" title="锁定凭证"/>
                        <Link href="#itemFourteenFour" title="解锁凭证"/>
					</Anchor>
				</div>
            </div>
        )
    }
}
