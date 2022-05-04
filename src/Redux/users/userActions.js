import  { CREATE_USER } from "./userActionTypes";
const createUser = (user) =>{
    return{
        type: CREATE_USER,
        payload: user
    }
}

export {createUser} ;