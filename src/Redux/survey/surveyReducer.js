import {CREATESURVEY} from './surveyActionTypes'
const intialSurveyList={
    surveys:[]
}

const surveyReducer=(state=intialSurveyList, action)=>{
    switch(action.type){
        case CREATESURVEY:
            
            return {
                surveys:[...state.surveys,action.payload]
            }
        default:
            return state
    }
}
export {surveyReducer}