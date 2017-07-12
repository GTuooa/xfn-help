import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Icon,Container,ScrollView } from 'app/components'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Lrpz extends React.Component {
    constructor() {
		super()
		this.state = {isPC: false}
	}
    render() {
        const { isPC } = this.state;
        return (
            <Container className="">
                <div className='header'>录入凭证</div>
                <ScrollView flex="1" uniqueKey="lrpz-scroll" savePosition>
                    <div className='help-center'>
    					<div className='content'>
    						<div className='item'>
    							<h3 id='itemFiveOne'>一、录入凭证</h3>
    							<div className='content-inner'>
    								<div>
                                        <ul className='list'>
                                            <li>
                                                编辑内容时，可以编辑摘要、选择科目、输入金额、改变借贷方向。
                                            </li>
                                            <li>
                                                选择带有辅助核算的科目后，需选择该辅助类别下的辅助项目。
                                            </li>
                                            <li>
                                                当“借方合计”等于“贷方合计”时，才能保存成功。
                                            </li>
                                            <li>
                                                点击“保存”成功后，将保存凭证并返回首页；点击“保存并新增”成功后，将保存凭证并刷新当前页面，可继续录入凭证。
                                            </li>
                                        </ul>
                                        <p className='describe pleft'>
                                            首页 => “录入凭证” => 编辑分录信息 => “增加分录” => 编辑分录信息 => …… => “保存”／“保存并新增”
                                        </p>
                                        <hr></hr>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_004.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_005.png@294w_522h'></img>
    											<p>第五步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_006.png@294w_522h'></img>
    											<p>第六步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/LRPZ/LRPZ_A_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/LRPZ/LRPZ_A_002.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/LRPZ/LRPZ_A_003.png@294w_522h'></img>
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
                    <Link to='cxpz'><Icon className="icon" type="next" size="20" color="#fff"/></Link>
                </div>
            </Container>
        )
    }
}
