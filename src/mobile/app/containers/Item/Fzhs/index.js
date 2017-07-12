import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Icon,Container,ScrollView } from 'app/components'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Fzhs extends React.Component {
    constructor() {
		super()
		this.state = {isPC: false}
	}
    render() {
        const { isPC } = this.state;
        return (
            <Container className="">
                <div className='header'>辅助核算设置</div>
                <ScrollView flex="1" uniqueKey="fzhs-scroll" savePosition>
                    <div className='help-center'>
    					<div className='content'>
    						<div className='item'>
    							<h3>一、新增辅助类别</h3>
    							<div className='content-inner'>
    								<div>
                                        <ul className='list'>
                                            <li>
                                                辅助类别中，默认包含客户、供应商、职员、项目和部门5个辅助类别（不可删除）。
                                            </li>
                                            <li>
                                                可根据业务需求自定义增加辅助类别，自定义辅助类别下至少包含1个辅助项目。
                                            </li>
                                            <li>
                                                删除该自定义类别下所有的辅助项目，即默认删除该自定义辅助类别。
                                            </li>
                                        </ul>
                                        <p className='describe pleft'>
                                            首页 => “辅助核算设置” => “新增” => “类别” => “输入自定义” => 输入新增类别名称 => “确认” => 编辑辅助项目信息 => “保存”
                                        </p>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_A_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_A_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_A_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_A_004.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_A_005.png@294w_522h'></img>
    											<p>第五步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_A_006.png@294w_522h'></img>
    											<p>第六步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/FZHSSZ/FZHSSZ_A_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/FZHSSZ/FZHSSZ_A_002.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/FZHSSZ/FZHSSZ_A_003.png@294w_522h'></img>
                                        </div>
    								</div>
    							</div>
    						</div>
    						<hr></hr>
                            {/*第二部分*/}
    						<div className='item'>
    							<h3 id='itemFourTwo'> 二、新增辅助项目</h3>
    							<div className='content-inner'>
    								<div>
    									<p className='describe pleft'>
                                            首页 => “辅助核算设置” => “新增” => “类别” => 选择辅助类别 => 编辑辅助项目信息 => ”保存”
    									</p>
    									<ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_B_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_B_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
    									<ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_B_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_B_004.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/FZHSSZ/FZHSSZ_B_002.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/FZHSSZ/FZHSSZ_B_002.png@294w_522h'></img>
                                        </div>
    								</div>
    							</div>
    						</div>
    						<hr></hr>
                            {/*第三部分*/}
    						<div className='item'>
    							<h3 id='itemFourThree'>三、关联科目</h3>
    							<div className='content-inner'>
                                    <ul className='list'>
                                        <li>
                                            辅助类别需关联科目才能正常使用。
                                        </li>
                                        <li>
                                            在录入凭证时，选择相应的科目后，需要选择辅助类别下的辅助项目。
                                        </li>
                                        <li>
                                            同理，在设置期初值时，通过设置辅助项目的期初值，自动合计该科目的期初值。
                                        </li>
                                    </ul>
    								<p className='describe pleft'>
                                        首页 => “辅助核算设置” => “辅助类别” => 选择关联科目的辅助类别 => “关联科目” => 选择需要关联的科目 => “确认”
                                    </p>
    								<hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_C_001.png@294w_522h'></img>
                                            <p>第一步</p>
                                        </li>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_C_002.png@294w_522h'></img>
                                            <p>第二步</p>
                                        </li>
                                    </ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_C_003.png@294w_522h'></img>
                                            <p>第三步</p>
                                        </li>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_C_004.png@294w_522h'></img>
                                            <p>第四步</p>
                                        </li>
                                    </ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/FZHSSZ/FZHSSZ_C_001.png@294w_522h'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" />
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/FZHSSZ/FZHSSZ_C_002.png@294w_522h'></img>
                                    </div>
    							</div>
    						</div>
                            <hr></hr>
                            {/*第四部分*/}
    						<div className='item'>
    							<h3 id='itemFourFour'>四、修改辅助项目</h3>
    							<div className='content-inner'>
    								<p className='describe pleft'>
                                        首页 => “辅助核算设置” => 点击需要修改的辅助项目 => 修改辅助项目信息 => “保存”
                                    </p>
    								<hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_D_001.png@294w_522h'></img>
                                            <p>第一步</p>
                                        </li>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_D_002.png@294w_522h'></img>
                                            <p>第二步</p>
                                        </li>
                                    </ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/FZHSSZ/FZHSSZ_D_001.png@294w_522h'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" />
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/FZHSSZ/FZHSSZ_D_002.png@294w_522h'></img>
                                    </div>
    							</div>
    						</div>
                            <hr></hr>
                            {/*第五部分*/}
    						<div className='item'>
    							<h3 id='itemFourFive'>五、删除辅助项目</h3>
    							<div className='content-inner'>
    								<p className='describe pleft'>
                                        删除自定义类别下所有的辅助项目，即默认删除该自定义辅助类别。
                                    </p>
                                    <p className='describe pleft'>
                                        首页 => “辅助核算设置” => “选择” => 勾选需要删除的辅助项目 => “删除” => “确定”
                                    </p>
    								<hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_E_001.png@294w_522h'></img>
                                            <p>第一步</p>
                                        </li>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_E_001.png@294w_522h'></img>
                                            <p>第二步</p>
                                        </li>
                                    </ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_E_003.png@294w_522h'></img>
                                            <p>第三步</p>
                                        </li>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/FZHSSZ/KMSZ_E_004.png@294w_522h'></img>
                                            <p>第四步</p>
                                        </li>
                                    </ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/FZHSSZ/FZHSSZ_E_001.png@294w_522h'></img>
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
                    <Link to='lrpz'><Icon className="icon" type="next" size="20" color="#fff"/></Link>
                </div>
            </Container>
        )
    }
}
