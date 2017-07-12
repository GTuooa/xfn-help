import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Icon,Container,ScrollView } from 'app/components'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Dypz extends React.Component {
    render() {
        return (
            <Container>
                <div className='header'>打印凭证</div>
                <ScrollView flex="1" uniqueKey="dypz-scroll" savePosition>
                    <div className='help-center'>
    					<div className='content'>
    						<div className='item'>
    							<h3 id='itemElevenOne'>一、凭证打印</h3>
    							<div className='content-inner'>
    								<div>
                                        <ul className='list'>
                                            <li>
                                                支持凭证以PDF格式导出后打印。
                                            </li>
                                            <li>
                                                默认每页PDF为A4大小，每张凭证为A5大小，一页PDF最多可容纳两张凭证。
                                            </li>
                                        </ul>
                                        <p className='describe pleft'>
                                            首页 => “查询凭证” => 选择需要打印的凭证 => “更多” => “导出为PDF”
                                        </p>
                                        <hr></hr>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZDY/PZDY_A_001.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZDY/PZDY_A_002.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZDY/PZDY_A_003.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZDY/PZDY_A_004.png@294w_522h'></img>
        								</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
                </ScrollView>
                <div className='footer'>
                    <Link to='all'><Icon className="icon" type="fenlei" size="18" color="#fff"/></Link>
                    <span>用户使用手册</span>
                    <Link to='ktbs'><Icon className="icon" type="next" size="20" color="#fff"/></Link>
                </div>
            </Container>
        )
    }
}
