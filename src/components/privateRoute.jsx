import auth from '../auth';

import { Navigate ,useLocation} from 'react-router';

const PrivateRoute = ({ children , path :Path}) => {
        const verified = auth.isAuthenticated() ;
        console.log(Path);
        const location =useLocation();
        return verified ? children : <Navigate to="/signin" state={{from: location}}/>;
      }


export default PrivateRoute;