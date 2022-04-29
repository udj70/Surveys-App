import {BrowserRouter,Route} from 'react-router-dom';
import { Routes } from 'react-router';

import CreateSurvey from './pages/Survey/components/createSurvey';
import SurveyList from './pages/Home/components/surveyList';
// import PrivateRoute from './Auth/PrivateRoute';
import Menu from './pages/Navbar/components/Menu';
import SurveyDetailPage from './pages/Survey/components/surveyDetail';


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
                <Route path = "/surveyDetailPage/:surveyId" element={<SurveyDetailPage/>}/>
                <Route path="/" element={<SurveyList/>}/>
                <Route path="/createSurvey" element={<CreateSurvey/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;