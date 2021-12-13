import { ADD_ACCOUNT , LOGIN_USER, GET_USERS } from "./action-types";
import * as api from '../api/api'


export const addAccount = (data) => {
    return (dispatch) => {
        dispatch({
            type:ADD_ACCOUNT,
            payload:data
        })
    }
}


export const getUsers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchUsers();
        dispatch({
            type:LOGIN_USER,
            payload:data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const loginUser = (user) => async (dispatch) =>{
    try {
        const data = await api.loginUser(user)
        localStorage.setItem('accesToken', data.accesToken)
        dispatch({
            type:LOGIN_USER,
            payload:data.user,
        }) 
    } catch (error) {
        console.log(error)
    }
}

export const getUserData = () => async (dispatch) => {
    try {
        const data = await api.userData()
        console.log(data)
        dispatch ({
            type:LOGIN_USER,
            payload:data
        })
    } catch (error) {
        
    }
}