import {BrowserRouter,Route} from 'react-router-dom';
import { Routes } from 'react-router';

import CreateSurvey from './pages/Survey/components/createSurvey';
import SurveyList from './pages/Home/components/surveyList';
import PrivateRoute from './components/privateRoute';
import Menu from './pages/Navbar/components/Menu';
import SurveyDetailPage from './pages/Survey/components/surveyDetail';
import SurveyResult from './pages/Survey/components/surveyResult';
import Signin from './pages/Signin/components/signIn';
import React from 'react';
import MySurveys from './pages/Survey/components/mySurveys';

function MainRouter(){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                {/* <Route exact path="/" component={ProductsContainer}/>
                
                <PrivateRoute exact path='/user/cart' component={Cart}/>
                <PrivateRoute exact path="/allusers" component={Users}/>
                <Route exact path="/search" component={Search}/> */}
                {/* updated from react-router-dom 6 version */}
                <Route path = "/surveyResults/:surveyId" element={<SurveyResult/>}/>
                <Route path = "/surveyDetailPage/:surveyId" element={<SurveyDetailPage/>}/>
                <Route path="/" element={<SurveyList/>}/>
                <Route
                    path="/createSurvey"
                    element={
                        <PrivateRoute path>
                            <CreateSurvey />
                        </PrivateRoute>
                    }
                />
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/mySurvey" element={<MySurveys/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;