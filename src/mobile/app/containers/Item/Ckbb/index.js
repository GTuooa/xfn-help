import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Icon,Container,ScrollView } from 'app/components'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Ckbb extends React.Component {
    constructor() {
        super()
        this.state = {isPC: false}
    }
    render() {
        const { isPC } = this.state;
        return (
            <Container className="">
                <div className='header'>查看报表</div>
                <ScrollView flex="1" uniqueKey="ckbb-scroll" savePosition>
                    <div className='help-center'>
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
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_A_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_A_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_A_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_A_004.png@294w_522h'></img>
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
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_B_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_B_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_B_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
                                            <li></li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_A_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_A_002.png@294w_522h'></img>
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
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_C_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_C_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_C_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
                                            <li></li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_B_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_B_002.png@294w_522h'></img>
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
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_F_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_F_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_F_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
                                            <li></li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_F_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_F_002.png@294w_522h'></img>
                                        </div>
    								</div>
    							</div>
    						</div>
                            <hr></hr>
                            {/* 第五部分 */}
                            <div className='item'>
    							<h3 id={isPC ? 'itemSevenFourPC' : 'itemSevenFour'}>
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
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_004.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_005.png@294w_522h'></img>
    											<p>第五步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_D_006.png@294w_522h'></img>
    											<p>第六步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down"/>
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_002.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_003.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_004.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_005.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_006.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_007.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_C_008.png@294w_522h'></img>
                                        </div>
    								</div>
    							</div>
    						</div>
                            <hr></hr>
                            {/* 第六部分 */}
                            <div className='item'>
    							<h3 id={isPC ? 'itemSevenFivePC' : 'itemSevenFive'}>
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
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_004.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_005.png@294w_522h'></img>
    											<p>第五步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CKBB/CKBB_E_006.png@294w_522h'></img>
    											<p>第六步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_002.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_003.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_004.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_005.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_006.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CKBB/CKBB_D_007.png@294w_522h'></img>
                                        </div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
                </ScrollView>
                <div className='footer'>
                    <Link to='all'><Icon className="icon" type="fenlei" size="18"/></Link>
                    <span onClick={()=>{
                        this.setState({isPC: !isPC});
                    }}>
                        {isPC ? '查看移动端':'查看电脑端'}
                        <Icon className="icon" type="shebei" size="18"/>
                    </span>
                    <Link to='jz'><Icon className="icon" type="next" size="20"/></Link>
                </div>
            </Container>
        )
    }
}
