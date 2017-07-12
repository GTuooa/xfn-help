import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Lrpz extends React.Component {
    static propTypes = {
		currentId: PropTypes.string
	}
    constructor() {
		super()
		this.state = { isPC: true, isShow: false }
	}
    render() {
        const { currentId } = this.props;
        const { isPC, isShow } = this.state;
        return (
            <div style={{display:currentId=='5' ? '' : 'none',float:'left'}}>
                <div className='help-center'>
					<header>
                        录入凭证
                        <span>
                            {isPC ? '查看移动端：' : '查看PC端：'}
                            <Switch checked={isPC} onChange={()=>this.setState({isPC: !isPC})}/>
                        </span>
                    </header>
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
											<img
                                                src={currentId=='5' ? 'http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_001.png':''}/>
											<p>第一步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
                                            <img
                                                src={currentId=='5' ? 'http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_002.png':''}
                                            />
											<p>第二步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
                                            <img
                                                src={currentId=='5' ? 'http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_003.png':''}
                                            />
											<p>第三步</p>
										</li>
										<li>
											<Icon type="arrow-right"/>
										</li>
										<li>
                                            <img
                                                src={currentId=='5' ? 'http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_004.png':''}
                                            />
											<p>第四步</p>
										</li>
									</ul>
                                    <ul className='mimg clearfix' style={{display:isPC?'none':''}}>
										<li>
                                            <img
                                                src={currentId=='5' ? 'http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_005.png':''}
                                            />
											<p>第五步</p>
										</li>
                                        <li>
											<Icon type="arrow-right"/>
										</li>
										<li>
                                            <img
                                                src={currentId=='5' ? 'http://xfncwhelp.image.alimmdn.com/mobile/LRPZ/LRPZ_A_006.png':''}
                                            />
											<p>第六步</p>
										</li>
									</ul>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img
                                            src={currentId=='5' ? 'http://xfncwhelp.image.alimmdn.com/desktop/LRPZ/LRPZ_A_001.png':''}
                                        />
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img
                                            src={currentId=='5' ? 'http://xfncwhelp.image.alimmdn.com/desktop/LRPZ/LRPZ_A_002.png':''}
                                        />
                                        <div className='arrow'>
                                            <Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
                                        </div>
                                    </div>
                                    <div className='pimg' style={{display:isPC?'':'none'}}>
                                        <img
                                            src={currentId=='5' ? 'http://xfncwhelp.image.alimmdn.com/desktop/LRPZ/LRPZ_A_003.png':''}
                                        />
                                    </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='help-right'>
					<Anchor affix={true} offsetTop={100}>
						<Link href="#itemFiveOne" title="录入凭证"/>
					</Anchor>
				</div>
            </div>
        )
    }
}
