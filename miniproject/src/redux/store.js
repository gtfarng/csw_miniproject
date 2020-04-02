import { createStore, combineReducers } from 'redux'
import { act } from 'react-dom/test-utils';
import Axios from 'axios'


const initAuthData = {
    accessToken = null ,
    psuInfo = null 
}
export const AuthActions = {
    getLoginStatus: () => async (dispatch) => {
        const res = await axios.get(`${config.apiUrl}/auth`);
        dispatch({ type: 'GET_LOGIN_STATUS', payload: res.data})
    },
    loginPSU: (username,password) => async (dispatch) => {
        const res = await axios.post(`${config.apiUrl}/auth/psu`, {username,password});
        const {stdId, firstname, id, type } = res.data ;
        if (strId.lenght > 0 )
            dispatch({ type: 'LOGIN_PSU', payload: res.data})
    },
    logout: () => async (dispatch) => {
        const res = await axios.get(`${config.apiUrl}/auth/logout`);
        dispatch({ type : 'LOGOUT' })
    }
    }

    const AuthReducer = (data = initAuthData, action) =>{

        switch(action.type){
            case 'GET_LOGIN_STATUS': return action.payload  ;
            case 'LOGIN_PSU': return {...data, psuInfo : action.payload}
            case 'LOGOUT': return iniialAuthData;
            default: return data 
        }
    }



const rootReducer = combineReducers({
    auth:AuthReducer,
       
})

export const store = createStore(rootReducer);