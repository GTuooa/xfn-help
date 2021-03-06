import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Zcgl extends React.Component {
    static propTypes = {
		currentId: PropTypes.string,
	}

    render() {
        const { currentId } = this.props;
        return (
            <div style={{display:currentId=='13' ? '' : 'none',float:'left'}}>
                <div className='help-center'>
					<header>资产管理</header>
					<div className='content'>
						<div className='item'>
							<h3 id='itemThirteenOne'>一、获取权限</h3>
							<div className='content-inner'>
								<div>
                                    <ul className='list'>
                                        <li>
                                            资产管理功能需要公司的钉钉企业管理员在超级管理页面申请试用
                                        </li>
                                    </ul>
                                    <p className='describe pleft'>首页=>“帐套设置” =>“超级管理” =>“申请试用”</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_A_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_A_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_A_003.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第二部分*/}
                        <div className='item'>
							<h3 id='itemThirteenTwo'>二、新增下级资产类别</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>首页=>“资产设置”=>“资产类别”=>点击某一资产类别前的“+”</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_B_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_B_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_B_003.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第三部分*/}
                        <div className='item'>
							<h3 id='itemThirteenThree'>三、编辑资产类别</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>首页=>“资产设置”=>“资产类别”=>点击某一资产类别前的“✏”</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_C_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_C_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_C_003.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第四部分*/}
                        <div className='item'>
							<h3 id='itemThirteenFour'>四、删除资产类别</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>首页=>“资产设置”=>“资产类别”=>勾选某一资产类别=>“删除”</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_D_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_D_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_D_003.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第五部分*/}
                        <div className='item'>
							<h3 id='itemThirteenFive'>五、新增资产卡片</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>首页=>“资产设置”=>“资产卡片”=>“新增”</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_E_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_E_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_E_003.png'></img>
                                        <div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_E_004.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第六部分*/}
                        <div className='item'>
							<h3 id='itemThirteenSix'>六、删除资产卡片</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>首页=>“资产设置”=>“资产卡片”=>勾选某一卡片类别=>“删除”</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_F_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_F_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_F_003.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_F_004.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第七部分*/}
                        <div className='item'>
							<h3 id='itemThirteenSeven'>七、编辑资产卡片</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>首页=>“资产设置”=>“资产卡片”=>点击某一卡片编码／名称=>进行编辑</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_G_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_G_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_G_003.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_G_004.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第八部分*/}
                        <div className='item'>
							<h3 id='itemThirteenEight'>八、复制资产卡片</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>首页=>“资产设置”=>“资产卡片”=>点击某一卡片编码／名称=>“复制”=>输入复制的张数</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_H_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_H_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_H_003.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_H_004.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_H_005.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第九部分*/}
                        <div className='item'>
							<h3 id='itemThirteenNine'>九、清理资产卡片</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>首页=>“资产设置”=>“资产卡片”=>点击某一卡片编码／名称=>“清理”</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_I_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_I_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_I_003.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_I_004.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_I_005.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第十部分*/}
                        <div className='item'>
							<h3 id='itemThirteenTen'>十、自动计提折旧</h3>
							<div className='content-inner'>
								<div>
                                    <ul className='list'>
                                        <li>
                                            若该资产的录入期间先于结账期间，则该资产会自动计提折旧
                                        </li>
                                    </ul>
                                    <p className='describe pleft'>首页 =>“结账” =>生成计提折旧凭证</p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_J_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_J_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/ZCGL/ZCGL_J_003.png'></img>
    								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='help-right'>
					<Anchor affix={true} offsetTop={100}>
						<Link href="#itemThirteenOne" title="获取权限"/>
						<Link href="#itemThirteenTwo" title="新增下级资产类别"/>
                        <Link href="#itemThirteenThree" title="编辑资产类别"/>
                        <Link href="#itemThirteenFour" title="删除资产类别"/>
                        <Link href="#itemThirteenFive" title="新增资产卡片"/>
                        <Link href="#itemThirteenSix" title="删除资产卡片"/>
                        <Link href="#itemThirteenSeven" title="编辑资产卡片"/>
                        <Link href="#itemThirteenEight" title="复制资产卡片"/>
                        <Link href="#itemThirteenNine" title="清理资产卡片"/>
                        <Link href="#itemThirteenTen" title="自动计提折旧"/>
					</Anchor>
				</div>
            </div>
        )
    }
}
