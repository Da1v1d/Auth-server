import axios from 'axios'
import baseApi from './baseApi'
import { endpoints } from './endpoint'

const generalUrl='http://localhost:5000/v1'

export const createEndpointWithUrl = (endpoint) => {
    return `${generalUrl}${endpoint}`
}

export const fetchUsers = () =>{
   axios.get(createEndpointWithUrl(endpoints.getAllUsers))
}

export const createUser =async ( user ) => { 
    axios.post(createEndpointWithUrl(endpoints.registerUser), user , {withCredentials:true})
}

export const loginUser = async ( user ) =>{
    const {data} = await axios.post(createEndpointWithUrl(endpoints.loginUser) , user , {withCredentials:true})
    return data
}

export const userData = async () => {
    const { data } = await baseApi({
        url:`${endpoints.getUserData}`,
        method:'get',
    })
    return data
}



