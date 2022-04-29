import {CREATESURVEY} from './surveyActionTypes';

const createSurvey=survey=>{
    return {
        type:CREATESURVEY,
        payload:survey
    }
}

export {createSurvey}