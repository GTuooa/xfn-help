import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Icon,Container,ScrollView, Row } from 'app/components'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import '../index.less'

@immutableRenderDecorator
export default
class All extends React.Component {
    static propTypes = {
		currentId: PropTypes.string,
	}
    render() {
        return (
            <div className="wrap">
                <div className='header'>用户使用手册</div>
                <ul className='all-list'>
                    <li><Link to='ktbs'>01 开通部署 <span>></span></Link></li>
                    <li><Link to='ztsz'>02 帐套设置 <span>></span></Link></li>
                    <li><Link to='kmsz'>03 科目设置 <span>></span></Link></li>
                    <li><Link to='fzhs'>04 辅助核算设置 <span>></span></Link></li>
                    <li><Link to='lrpz'>05 录入凭证 <span>></span></Link></li>
                    <li><Link to='cxpz'>06 查询凭证 <span>></span></Link></li>
                    <li><Link to='ckbb'>07 查看报表 <span>></span></Link></li>
                    <li><Link to='jz'  >08 结账/反结账 <span>></span></Link></li>
                    <li><Link to='bfsj'>09 备份数据 <span>></span></Link></li>
                    <li><Link to='sjdr'>10 数据导入/导出 <span>></span></Link></li>
                    <li><Link to='dypz'>11 打印凭证 <span>></span></Link></li>
                    <li><Link to='cjgl'>12 超级管理 <span>></span></Link></li>
                    <li><Link to='zcgl'>13 资产管理 <span>></span></Link></li>
                    <li><Link to='pzcg'>14 凭证草稿 <span>></span></Link></li>
                </ul>
                <div className='footer'>
					<Link to='all' ><Icon type="fenlei" size="18" /></Link>
					<span>用户使用手册</span>
					<Link to='ktbs'><Icon type="next"   size="20" /></Link>
				</div>
            </div>
        )
    }
}
