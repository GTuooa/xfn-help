import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Ckbb extends React.Component {
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
            <div style={{display:currentId=='7' ? '' : 'none',float:'left'}}>
                <div className='help-center'>
					<header>
                        查看报表
                        <span>
                            {isPC ? '查看移动端：' : '查看PC端：'}
                            <Switch
                                checked={isPC}
                                onChange={()=>this.setState({isPC: !isPC})}
                            />
                        </span>
                    </header>
					<div className='content'>
						<div className='item' style={{display:isPC ? 'none' :''}}>
							<h3 id='itemSevenOne'>一、老板表</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>
                                        首页 => “老板表” => 根据阿米巴模式查看 => 点击科目 => 进入该科目明细表
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_A_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_A_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_A_003.png'></img>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_A_004.png'></img>
											<p>第四步</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
                        <hr style={{display:isPC ? 'none' :''}}></hr>
                        {/* 第二部分 */}
                        <div className='item'>
							<h3 id={isPC ? 'itemSevenTwoPC' : 'itemSevenTwo'}>{isPC ? '一、利润表' : '二、利润表'}</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>
                                        首页 => “利润表” => 点击下拉图标 => 查看利润表完整数据
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_B_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_B_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_B_003.png'></img>
											<p>第三步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_A_001.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_A_002.png'></img>
                                    </div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/* 第三部分 */}
                        <div className='item'>
							<h3 id={isPC ? 'itemSevenThreePC' : 'itemSevenThree'}>{isPC ? '二、资产负债表' : '三、资产负债表'}</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>
                                        首页 => “资产负债表” => 点击下拉图标 => 查看资产负债表完整数据
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_C_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_C_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_C_003.png'></img>
											<p>第三步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_B_001.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_B_002.png'></img>
                                    </div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/* 第四部分 */}
                        <div className='item'>
							<h3 id={isPC ? 'itemSevenFourPC' : 'itemSevenFour'}>{isPC ? '三、现金流量表' : '四、现金流量表'}</h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>
                                        首页 => “现金流量表” => 查看现金流量表数据
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_F_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_F_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_F_003.png'></img>
											<p>第三步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_F_001.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_F_002.png'></img>
                                    </div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/* 第五部分 */}
                        <div className='item'>
							<h3 id={isPC ? 'itemSevenFivePC' : 'itemSevenFive'}>
                                {isPC ? '四、科目余额表／明细表' : '五、科目余额表／明细表'}
                            </h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>
                                        首页 => “科目余额表” => 点击科目 => 查看科目明细表（可根据科目、辅助项目查看） => 点击凭证 => 查看凭证详情
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_003.png'></img>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_004.png'></img>
											<p>第四步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_005.png'></img>
											<p>第五步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_006.png'></img>
											<p>第六步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_001.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_002.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_003.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_004.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_005.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_006.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_007.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_008.png'></img>
                                    </div>
								</div>
							</div>
						</div>
                        <hr></hr>
                        {/* 第六部分 */}
                        <div className='item'>
							<h3 id={isPC ? 'itemSevenSixPC' : 'itemSevenSix'}>
                                {isPC ? '五、辅助核算余额表／明细表' : '六、辅助核算余额表／明细表'}
                            </h3>
							<div className='content-inner'>
								<div>
                                    <p className='describe pleft'>
                                        首页 => “辅助核算余额表” => 选择辅助类别 => 点击辅助项目 => 查看辅助项目明细表（可根据科目查看） => 点击凭证 => 查看凭证详情
                                    </p>
                                    <hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_001.png'></img>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_002.png'></img>
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_003.png'></img>
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_004.png'></img>
											<p>第四步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_005.png'></img>
											<p>第五步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_006.png'></img>
											<p>第六步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_001.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_002.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_003.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_004.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_005.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_006.png'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_007.png'></img>
                                    </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='help-right' style={{display:isPC ? 'none' :''}}>
					<Anchor affix={true} offsetTop={100}>
						<Link href="#itemSevenOne" title="老板表"/>
                        <Link href="#itemSevenTwo" title="利润表"/>
                        <Link href="#itemSevenThree" title="资产负债表"/>
                        <Link href="#itemSevenFour" title="现金流量表"/>
                        <Link href="#itemSevenFive" title="科目余额表/明细表"/>
                        <Link href="#itemSevenSix" title="辅助核算余额表/明细表"/>
					</Anchor>
				</div>
                <div className='help-right' style={{display:isPC ? '' :'none'}}>
					<Anchor affix={true} offsetTop={100}>
                        <Link href="#itemSevenTwoPC" title="利润表"/>
                        <Link href="#itemSevenThreePC" title="资产负债表"/>
                        <Link href="#itemSevenFourPC" title="现金流量表"/>
                        <Link href="#itemSevenFivePC" title="科目余额表/明细表"/>
                        <Link href="#itemSevenSixPC" title="辅助核算余额表/明细表"/>
					</Anchor>
				</div>
            </div>
        )
    }
}
