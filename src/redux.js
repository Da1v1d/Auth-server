export const initialstate={
    accounts:[]
}


const reducer=(state=initialstate,action)=>{
    switch (action.type){
        case "addaccount":
            return{
                ...state,
                accounts:[...state.accounts,action.payload]
            }
            default:
                return state
    }
}
export default reducer