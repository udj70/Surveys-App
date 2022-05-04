import {CREATESURVEY, SAVE_RESPONSES} from './surveyActionTypes';
const createSurvey=survey=>{
    return {
        type:CREATESURVEY,
        payload:survey
    }
}

const saveResponses=survey=>{
    return {
        type: SAVE_RESPONSES,
        payload: survey
    }
}


export {createSurvey, saveResponses}