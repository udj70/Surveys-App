import {combineReducers} from 'redux';
import userReducer from './users/userReducer';
import surveyReducer from './survey/surveyReducer';
//import userReducer from './user/userReducer'; 
const rootReducer=combineReducers({
    survey:surveyReducer,
    user:userReducer,
})
export default rootReducer;