import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Icon,Container,ScrollView } from 'app/components'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Jz extends React.Component {
    constructor() {
		super()
		this.state = {isPC: false}
	}
    render() {
        const { isPC } = this.state;
        return (
            <Container className="">
                <div className='header'>结账／反结账</div>
                <ScrollView flex="1" uniqueKey="jz-scroll" savePosition>
                    <div className='help-center'>
    					<div className='content'>
    						<div className='item'>
    							<h3 id='itemEightOne'>一、结账</h3>
    							<div className='content-inner'>
    								<div>
                                        <ul className='list'>
                                            <li>
                                                使用 “结账”功能，将自动生成收益凭证／损失凭证。
                                            </li>
                                            <li>
                                                利润自动结转至 3103_本年利润 ；结账第12期，将自动将 3103_本年利润 结转至 310405_未分配利润。
                                            </li>
                                        </ul>
                                        <p className='describe pleft'>首页 => “结账” => “结账” => “确定”</p>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_003.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_004.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/JZ/JZ_A_001.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/JZ/JZ_A_002.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/JZ/JZ_A_003.png@294w_522h'></img>
        								</div>
    								</div>
    							</div>
    						</div>
    						<hr></hr>
                            {/*第二部分*/}
    						<div className='item'>
    							<h3 id='itemEightTwo'>二、反结账</h3>
    							<div className='content-inner'>
    								<div>
    									<p className='step'>
    										<span>反结账：</span>
    										<span>首页 => “结账” => “反结账” => “确定”</span>
    									</p>
    									<ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_005.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_006.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
    									<ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_007.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/JZ/JZ_A_008.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/JZ/JZ_A_004.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/JZ/JZ_A_005.png@294w_522h'></img>
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
                    <Link to='bfsj'><Icon className="icon" type="next" size="20" color="#fff"/></Link>
                </div>
            </Container>
        )
    }
}
