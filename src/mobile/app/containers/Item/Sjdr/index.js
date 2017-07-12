import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Icon,Container,ScrollView } from 'app/components'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'


@immutableRenderDecorator
export default
class Sjdr extends React.Component {
    render() {
        return (
            <Container className="">
                <div className='header'>数据导入/导出</div>
                <ScrollView flex="1" uniqueKey="sjdr-scroll" savePosition>
                    <div className='help-center'>
    					<div className='content'>
    						<div className='item'>
    							<h3 id='itemTenOne'>一、批量数据导入</h3>
    							<div className='content-inner'>
    								<div>
                                        <ul className='list'>
                                            <li>
                                                在”录入凭证”、”查询凭证”、”科目设置”（”期初值”）、”辅助核算设置”页面的右上角均有”导入”按钮。
                                            </li>
                                            <li>
                                                导入的表格需符合模版中的格式方能正常导入。
                                            </li>
                                        </ul>
                                        <p className='describe pleft'>
                                            “更多” => “导入” (=> “下载模版” => 根据模板调整格式) => “浏览” => 选择需要导入的表格 => “上传Excel”
                                        </p>
                                        <hr></hr>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_A_001.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_A_002.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_A_003.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_A_004.png@294w_522h'></img>
        								</div>
    								</div>
    							</div>
    						</div>
    						<hr></hr>
                            {/*第二部分*/}
    						<div className='item'>
    							<h3 id='itemTenTwo'>二、批量数据导出</h3>
    							<div className='content-inner'>
    								<div>
                                        <ul className='list'>
                                            <li>
                                                凭证数据、科目数据、期初值数据、辅助核算数据、利润表、资产负债表、科目余额表、科目明细表、辅助核算余额表、辅助核算明细表均支持批量导出Excel 格式。
                                            </li>
                                            <li>
                                                当导出数据较多时，耗时较长，建议选择”导出到联系人”，文件将以消息的形式发送至指定联系人。
                                            </li>
                                        </ul>
    									<p className='describe pleft'>
    										首页 => 模块页面 => “更多” => “导出” => “导出到联系人” => 选择联系人 => “确定” => 以工作通知的形式查收
    									</p>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_B_001.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_B_002.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_B_003.png@294w_522h'></img>
                                            <div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
                                            <img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_B_004.png@294w_522h'></img>
        								</div>
                                        <hr></hr>
                                        <p className='describe pleft'>
                                            首页 => 模块页面 => “更多” => “导出” => “立即下载” => 直接下载Excel在本地电脑
                                        </p>
                                        <hr></hr>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_B_005.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_B_006.png@294w_522h'></img>
        									<div className='arrow'>
        										<Icon type="arrow-down" />
        									</div>
        								</div>
                                        <div className='pimg'>
        									<img src='http://xfncwhelp.image.alimmdn.com/desktop/SJDRDC/SJDRDC_B_007.png@294w_522h'></img>
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
                    <Link to='dypz'><Icon className="icon" type="next" size="20" color="#fff"/></Link>
                </div>
            </Container>
        )
    }
}
