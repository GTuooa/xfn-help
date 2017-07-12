import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Icon,Container,ScrollView } from 'app/components'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Kmsz extends React.Component {
    constructor() {
		super()
		this.state = {isPC: false}
	}
    render() {
        const { isPC } = this.state;
        return (
            <Container className="">
                <div className='header'>科目设置</div>
                <ScrollView flex="1" uniqueKey="kmsz-scroll" savePosition>
                    <div className='help-center'>
    					<div className='content'>
    						<div className='item'>
    							<h3 id='itemThreeOne'>一、新增科目</h3>
    							<div className='content-inner'>
    								<div>
    									<p className='blod'>科目编码支持四级科目结构，需遵循“4-2-2-2”编码原则。详见下表：</p>
                                        <table width='100%' cellSpacing='0' cellPadding='0'>
                                            <tbody>
                                            <tr>
                                                <td></td>
                                                <td>科目编码位数</td>
                                                <td>举例</td>
                                            </tr>
                                            <tr>
                                                <td>一级科目</td>
                                                <td>4位数</td>
                                                <td>1002_银行存款</td>
                                            </tr>
                                            <tr>
                                                <td>二级科目</td>
                                                <td>6位数</td>
                                                <td>100201_工商银行</td>
                                            </tr>
                                            <tr>
                                                <td>三级科目</td>
                                                <td>8位数</td>
                                                <td>10020102_工行松江分行</td>
                                            </tr>
                                            <tr>
                                                <td>四级科目</td>
                                                <td>10位数</td>
                                                <td>1002010202_张三账户</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <p className='blod'>
                                            科目编码须以 1、2、3、4、5 开头，分别对应资产、负债、权益、成本、损益的五个科目类。
                                        </p>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_A_001.jpeg@294w_522h'></img>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_A_002.png@294w_522h'></img>
                                        </div>
                                        <hr></hr>
                                        <p className='step'>
    										<span>新增一级科目：</span>
    										<span>首页 => “科目设置” => “新增” => “增加一级科目” => 编辑科目信息 => “保存”</span>
    									</p>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_A_002.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_A_003.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_A_004.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_A_005.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_A_003.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_A_005.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_A_004.png@294w_522h'></img>
                                        </div>
                                        <hr></hr>
                                        <p className='step'>
    										<span>新增子级科目：</span>
    										<span>
                                                首页 => “科目设置” => “新增” => 点击科目前的“+” => 编辑科目信息 => “保存”
                                            </span>
    									</p>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_A_006.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_A_007.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_A_008.png@294w_522h'></img>
    											<p>第三步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_A_009.png@294w_522h'></img>
    											<p>第四步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_A_005.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_A_006.png@294w_522h'></img>
                                        </div>
    								</div>
    							</div>
    						</div>
    						<hr></hr>
                            {/*第二部分*/}
    						<div className='item'>
    							<h3 id='itemThreeTwo'>二、修改科目信息</h3>
    							<div className='content-inner'>
    								<div>
    									<p className='describe pleft'>
                                            首页 => “科目设置” => 点击需要修改的科目 => 修改科目信息 => “保存”
    									</p>
    									<ul className='mimg clearfix' style={{display:isPC?'none':''}}>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_B_001.png@294w_522h'></img>
    											<p>第一步</p>
    										</li>
    										<li>
    											<img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_B_002.png@294w_522h'></img>
    											<p>第二步</p>
    										</li>
    									</ul>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_B_001.png@294w_522h'></img>
                                            <div className='arrow'>
                                                <Icon type="arrow-down" />
                                            </div>
                                        </div>
                                        <div className='pimg' style={{display:isPC?'':'none'}}>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_B_002.png@294w_522h'></img>
                                        </div>
    								</div>
    							</div>
    						</div>
    						<hr></hr>
                            {/*第三部分*/}
    						<div className='item'>
    							<h3 id='itemThreeThree'>三、删除科目</h3>
    							<div className='content-inner'>
    								<p className='describe pleft'>
                                        首页 => “科目设置” => “选择” => 勾选需要删除的科目 => “删除” => “确定”
                                    </p>
    								<hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_C_001.png@294w_522h'></img>
                                            <p>第一步</p>
                                        </li>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_C_002.png@294w_522h'></img>
                                            <p>第二步</p>
                                        </li>
                                    </ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_C_003.png@294w_522h'></img>
                                            <p>第三步</p>
                                        </li>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_C_004.png@294w_522h'></img>
                                            <p>第四步</p>
                                        </li>
                                    </ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_C_001.png@294w_522h'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" />
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_C_002.png@294w_522h'></img>
                                    </div>
    							</div>
    						</div>
                            <hr></hr>
                            {/*第四部分*/}
    						<div className='item'>
    							<h3 id='itemThreeFour'>四、期初值</h3>
    							<div className='content-inner'>
    								<p className='describe pleft'>首页 => “科目设置” => “更多” => “期初值” => 编辑／修改期初值 => （“试算平衡” => ）“保存”</p>
    								<hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_D_001.png@294w_522h'></img>
                                            <p>第一步</p>
                                        </li>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_D_002.png@294w_522h'></img>
                                            <p>第二步</p>
                                        </li>
                                    </ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_D_003.png@294w_522h'></img>
                                            <p>第三步</p>
                                        </li>
                                        <li></li>
                                    </ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_D_001.png@294w_522h'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" />
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_D_002.png@294w_522h'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" />
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_D_003.png@294w_522h'></img>
                                    </div>
    							</div>
    						</div>
                            <hr></hr>
                            {/*第五部分*/}
    						<div className='item'>
    							<h3 id='itemThreeFive'>五、反悔模式</h3>
    							<div className='content-inner'>
                                    <ul className='list'>
                                        <li>
                                            “反悔模式”是为带有辅助核算／期初值／已在凭证中使用的科目下增加子科目。
                                        </li>
                                        <li>
                                            科目数据将自动转移至新增的第一个子科目中，该操作为不可逆操作。
                                        </li>
                                        <li>
                                            操作前，需校验该科目是否需要使用反悔模式。
                                        </li>
                                    </ul>
    								<p className='describe pleft'>
                                        首页 => “科目设置” => “更多” => “反悔模式” => 输入科目代码 => “校验” => 编辑科目信息 => “继续操作请勾选” => “保存”
                                    </p>
    								<hr></hr>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_E_001.png@294w_522h'></img>
                                            <p>第一步</p>
                                        </li>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_E_002.png@294w_522h'></img>
                                            <p>第二步</p>
                                        </li>
                                    </ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_E_003.png@294w_522h'></img>
                                            <p>第三步</p>
                                        </li>
                                        <li>
                                            <img src='http://xfncwhelp.image.alimmdn.com/mobile/KMSZ/KMSZ_E_004.png@294w_522h'></img>
                                            <p>第四步</p>
                                        </li>
                                    </ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_E_001.png@294w_522h'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" />
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_E_002.png@294w_522h'></img>
                                        <div className='arrow'>
                                            <Icon type="arrow-down" />
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img src='http://xfncwhelp.image.alimmdn.com/desktop/KMSZ/KMSZ_E_003.png@294w_522h'></img>
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
                    <Link to='fzhs'><Icon className="icon" type="next" size="20" color="#fff"/></Link>
                </div>
            </Container>
        )
    }
}
