import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

import {surveyReducer} from './survey/surveyReducer';

const store=createStore(surveyReducer,composeWithDevTools(applyMiddleware(logger)));
export default store