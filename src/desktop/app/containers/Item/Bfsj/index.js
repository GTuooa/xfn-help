import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Bfsj extends React.Component {
    static propTypes = {
		currentId: PropTypes.string,
	}

    render() {
        const { currentId } = this.props;
        return (
            <div style={{display:currentId=='9' ? '' : 'none',float:'left'}}>
                <div className='help-center'>
					<header>备份数据</header>
					<div className='content'>
						<div className='item'>
							<h3 id='itemNineOne'>一、一键备份</h3>
							<div className='content-inner'>
								<div>
                                    <ul className='list'>
                                        <li>
                                            只有管理员具有“一键备份”权限。
                                        </li>
                                        <li>
                                            通过“一键备份”，将以Excel 格式备份该账套中辅助核算、科目、期初值和凭证数据。
                                        </li>
                                    </ul>
                                    <p className='describe pleft'>首页 => “账套设置” => “一键备份” </p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/BFSJ/BFSJ_A_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/BFSJ/BFSJ_A_002.png'></img>
    								</div>
								</div>
							</div>
						</div>
						<hr></hr>
                        {/*第二部分*/}
						<div className='item'>
							<h3 id='itemNineTwo'> 二、备份数据恢复</h3>
							<div className='content-inner'>
								<div>
                                    <ul className='list'>
                                        <li>
                                            按【辅助核算数据 => 科目数据 => 期初值 => 凭证数据】的顺序依次导入备份数据。
                                        </li>
                                        <li>
                                            目前不支持结帐凭证导入，如果误将结帐凭证导入，请在查询凭证内删除结帐凭证后再通过应用内的“结帐”功能生成结帐凭证。
                                        </li>
                                    </ul>
									<p className='step'>
										<span>第一步</span>
										<span>创建一个空账套：首页 => “账套设置” => ”创建新账套” => 选择新建“空账套”</span>
									</p>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/BFSJ/BFSJ_B_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/BFSJ/BFSJ_B_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/BFSJ/BFSJ_B_003.png'></img>
    								</div>
                                    <hr></hr>
                                    <p className='step'>
										<span>第二步</span>
										<span> 导入备份数据：（以导入”辅助核算数据”为例。）</span>
									</p>
                                    <p className='describe pleft'>
                                        在Excel 表格中将”辅助核算数据”放在第一个sheet标签位 => 首页 => “辅助核算设置” => “更多” => “导入” => “浏览” => 选择Excel 表格 => “上传Excel”（依次导入剩余数据）
                                    </p>
                                    <hr></hr>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/BFSJ/BFSJ_B_004.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/BFSJ/BFSJ_B_005.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/BFSJ/BFSJ_B_006.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/BFSJ/BFSJ_B_007.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/BFSJ/BFSJ_B_008.png'></img>
    								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='help-right'>
					<Anchor affix={true} offsetTop={100}>
						<Link href="#itemNineOne" title="一键备份"/>
						<Link href="#itemNineTwo" title="备份数据恢复"/>
					</Anchor>
				</div>
            </div>
        )
    }
}
