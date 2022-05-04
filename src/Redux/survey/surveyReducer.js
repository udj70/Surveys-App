import {CREATESURVEY, SAVE_RESPONSES} from './surveyActionTypes';

const intialSurveyList={
    surveys:[],
    responses:[]
}

const surveyReducer=(state=intialSurveyList, action)=>{
    switch(action.type){
        case CREATESURVEY:
            
            return {
                ...state,
                surveys:[...state.surveys,action.payload]
            }
        case SAVE_RESPONSES:
            
            const currentSurveyResponse = state.responses.length ? state.responses.filter(res => res.surveyId == action.payload.surveyId) : [];
            
            if(currentSurveyResponse.length){
                
                const otherSurveyResponses = state.responses.filter(res => res.surveyId !== action.payload.surveyId)
                const newResponses=action.payload.responseList
                currentSurveyResponse[0].responseList.forEach(currentResponse => {
                    const questionId=currentResponse.qId
                    const newResponse=newResponses.filter(res=>res.qId==questionId);
                   
                    if(newResponse[0].Option1==1){
                        console.log("inside")
                        currentResponse.Option1=currentResponse.Option1+1
                    }
                    if(newResponse[0].Option2==1){
                        console.log("inside")
                        currentResponse.Option2=currentResponse.Option2+1
                    }
                    if(newResponse[0].Option3==1){
                        currentResponse.Option3=currentResponse.Option3+1;
                        console.log("inside 3")
                    }
                    if(newResponse[0].option4==1){
                        console.log("inside")
                        currentResponse.Option4=currentResponse.Option4+1
                    }
                    

                });
                
                
                return {
                    ...state,
                    responses : [...otherSurveyResponses , currentSurveyResponse[0]]
                }
            }
            return {
                ...state,
                responses : [...state.responses, action.payload]
            }
        default:
            return state
    }
}

export default surveyReducer;