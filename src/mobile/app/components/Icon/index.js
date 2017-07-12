import React from 'react'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import './iconfont.less'

@immutableRenderDecorator
export default
class Icon extends React.Component{
	render() {
		const { type, size, style,color,className } = this.props
		return (
			<i
				className={['icon', 'icon-' + type, className].join(' ')}
				style={Object.assign({fontSize: size && size/100 + 'rem'}, style)}
			>
			</i>
		)
	}
}

// import React from 'react'
// // import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
// // import styles from './icon.css'
// import './style.less'
//
// // @immutableRenderDecorator
// export default
// class Icon extends React.Component{
// 	render() {
// 		const { type, className, size, style } = this.props
// 		return (
// 			<i
// 				{...this.props}
// 				className={['icon', 'icon-' + type, className].join(' ')}
// 				style={Object.assign({fontSize: size && size + 'px'}, style)}
// 			></i>
// 		)
// 	}
// }
