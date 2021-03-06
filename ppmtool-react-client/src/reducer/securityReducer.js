import { SET_CURRENT_USER } from "../action/types";

const initialState = {
    validToken:false,
    user:{}
}


const booleanActionPayload = payload => {
    if(payload){
        return true
    }else{
        return false
    }
}

const securityReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                validToken:booleanActionPayload(action.payload),
                user:action.payload
            }
        default:
            return state    
    }
}

export default securityReducer