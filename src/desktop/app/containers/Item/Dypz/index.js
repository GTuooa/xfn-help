import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Anchor } from 'antd';
const SubMenu = Menu.SubMenu;
const { Link } = Anchor;
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Dypz extends React.Component {
    static propTypes = {
		currentId: PropTypes.string,
	}

    render() {
        const { currentId } = this.props;
        return (
            <div style={{display:currentId=='11' ? '' : 'none',float:'left'}}>
                <div className='help-center'>
					<header>凭证打印</header>
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
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZDY/PZDY_A_001.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZDY/PZDY_A_002.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZDY/PZDY_A_003.png'></img>
    									<div className='arrow'>
    										<Icon type="arrow-down" style={{ fontSize: 30, color: '#adb5db' }}/>
    									</div>
    								</div>
                                    <div className='pimg'>
    									<img src='http://xfncwhelp.image.alimmdn.com/desktop/PZDY/PZDY_A_004.png'></img>
    								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='help-right'>
					<Anchor affix={true} offsetTop={100}>
						<Link href="#itemElevenOne" title="凭证打印"/>
					</Anchor>
				</div>
            </div>
        )
    }
}
