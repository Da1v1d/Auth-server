import { ADD_ACCOUNT, GET_USERS , LOGIN_USER } from "./action-types"

const initialstate={
    data:{
        login:null,
        password:null
    },
    endRequest:true,
    users:[],
    accounts:[]
}


const reducer=(state=initialstate,action)=>{
    switch (action.type){
        case GET_USERS :
            return {
                ...state,
                users:action.payload
            }
        case LOGIN_USER :
            return {
                ...state,
                data:action.payload,
            }    
            default:
                return state
    }
}
export default reducer