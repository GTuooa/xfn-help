import { fromJS,toJS } from 'immutable'
import * as actionType from 'app/constants/actionType'

const homeState = fromJS({
    spinStatus:false,//加载中的组件的状态
})

export default function homeReducer(state = homeState, action) {
    return ({
        [actionType.SHOW_SPIN_STATUS]           : () => state.set('spinStatus', false)
    }[action.type] || (() => state))()
}
