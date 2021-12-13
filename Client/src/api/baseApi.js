import axios from "axios"


const baseApi = axios.create({
    baseURL:'http://localhost:5000/v1'
})

const accesToken = localStorage.getItem('accesToken')

baseApi.interceptors.request.use(req=>{
    req.headers = {
        'Authorization': `Bearer ${accesToken}`
    }
    return req
})
export default  baseApi