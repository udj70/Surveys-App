import { CREATE_USER } from "./userActionTypes"

const intialState = {
    users:[{
        "userid" : "abc",
        "password" : "xyz" 
                }]
}

const userReducer =(state=intialState , action)=>{
    switch(action.type){
        case CREATE_USER:
            return {
                users:[...state.users , action.payload]
            }
        default:
            return{
                ...state
            }
        }
}
export default userReducer;