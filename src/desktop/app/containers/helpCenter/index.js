import React from 'react'
import { Menu, Icon, Anchor } from 'antd';
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import { Ktbs, Ztsz, Kmsz, Fzhs, Lrpz, Cxpz, Ckbb, Jz, Bfsj, Sjdr, Dypz, Cjgl, Zcgl, Pzcg } from '../Item'
import './index.less'
const { Link } = Anchor;
const SubMenu = Menu.SubMenu;

@immutableRenderDecorator
export default
class HelpCenter extends React.Component {
	constructor() {
		super()
		this.state = {currentId: '1'}
	}
	render() {
		const { currentId } = this.state
		return (
			<div className='body clearfix'>
				<div className='space'></div>
				<div className='help-left'>
					{/* <h2>常见问题</h2> */}
					<Menu
				        onSelect={(value)=>{ this.setState({currentId: value.key});window.scrollTo(0,1);window.scrollTo(0,0)}}
						//加滚动是为了让页面从头开始并解决右侧固定定位不稳定的bug
				        style={{ width: 240,fontSize: '14px' }}
				        defaultSelectedKeys={['1']}
				        defaultOpenKeys={['sub1']}
				        mode="inline"
				     >
						<SubMenu key="sub1" title={<span>用户使用手册</span>}>
				          <Menu.Item key="1">开通部署</Menu.Item>
				          <Menu.Item key="2">帐套设置</Menu.Item>
				          <Menu.Item key="3">科目设置</Menu.Item>
						  <Menu.Item key="4">辅助核算设置</Menu.Item>
						  <Menu.Item key="5">录入凭证</Menu.Item>
						  <Menu.Item key="6">查询凭证</Menu.Item>
						  <Menu.Item key="7">查看报表</Menu.Item>
						  <Menu.Item key="8">结账/反结账</Menu.Item>
						  <Menu.Item key="9">备份数据</Menu.Item>
						  <Menu.Item key="10">数据导入/导出</Menu.Item>
						  <Menu.Item key="11">打印凭证</Menu.Item>
						  <Menu.Item key="12">超级管理</Menu.Item>
						  <Menu.Item key="13">资产管理</Menu.Item>
						  <Menu.Item key="14">凭证草稿</Menu.Item>
				        </SubMenu>
						{/* <SubMenu key="sub2" title={<span>体验站</span>}>
				          <Menu.Item key="15">体验站</Menu.Item>
				        </SubMenu> */}
					</Menu>
				</div>
				<Ktbs currentId={currentId}/>
				<Ztsz currentId={currentId}/>
				<Kmsz currentId={currentId}/>
				<Fzhs currentId={currentId}/>
				<Lrpz currentId={currentId}/>
				<Cxpz currentId={currentId}/>
				<Ckbb currentId={currentId}/>
				<Jz   currentId={currentId}/>
				<Bfsj currentId={currentId}/>
				<Sjdr currentId={currentId}/>
				<Dypz currentId={currentId}/>
				<Cjgl currentId={currentId}/>
				<Zcgl currentId={currentId}/>
				<Pzcg currentId={currentId}/>
			</div>
		)
	}
}
