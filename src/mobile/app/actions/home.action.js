import * as actionType from 'app/constants/actionType'
import fetchApi from 'app/constants/fetch.constant.js'

//获取初始数据
export const init = ()=> dispatch => {//获取初始数据
    fetchApi('sobinfoUrl', 'GET', 'corpId=ding9849431a8160211e&&ddUserId=manager1516', json =>{
        if(json.code!==0){//失败
            dispatch({type: actionType.CLOSE_SPIN_STATUS})
        }else{//成功
            dispatch({
                    type: actionType.INIT,
                    receivedData: json.data
            })
        }
    })
}

//单击选中所有帐套
export const selectAllModifyButton = () => ({
    type: actionType.INIT
})
