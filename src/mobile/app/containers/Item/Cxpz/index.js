import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Icon,Container,ScrollView } from 'app/components'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Cxpz extends React.Component {
    constructor() {
		super()
		this.state = {isPC: false}
	}
    render() {
        const { isPC } = this.state;
        return (
            <Container className="">
                <div className='header'>查询凭证</div>
                <ScrollView flex="1" uniqueKey="cxpz-scroll" savePosition>
                    <div className='help-center'>
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
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_A_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_A_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_A_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_A_004.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_A_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_A_002.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_A_003.png@294w_522h'></img>
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
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_004.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_002.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_003.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_004.png@294w_522h'></img>
                                        </div>
                                        <hr></hr>
                                        <p className='describe pleft'>
                                            反审核：首页 => “查询凭证” => 点击凭证 => 查看凭证详情 => “反审核”
                                        </p>
                                        <hr></hr>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_005.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_B_006.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_005.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_B_006.png@294w_522h'></img>
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
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_C_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_C_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_C_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_C_004.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_C_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_C_002.png@294w_522h'></img>
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
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_D_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/CXPZ/CXPZ_D_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/CXPZ/CXPZ_D_001.png@294w_522h'></img>
                                        </div>
    								</div>
    							</div>
    						</div>

    					</div>
    				</div>
                </ScrollView>
                <div className='footer'>
                    <Link to='all'><Icon className="icon" type="fenlei" size="18" color="#fff"/></Link>
                    <span onClick={()=>{
                        this.setState({isPC: !isPC});
                    }}>
                        {isPC ? '查看移动端':'查看电脑端'}
                        <Icon className="icon" type="shebei" size="18"/>
                    </span>
                    <Link to='ckbb'><Icon className="icon" type="next" size="20" color="#fff"/></Link>
                </div>
            </Container>
        )
    }
}
