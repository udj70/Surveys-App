import auth from '../auth';

import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
        const verified = auth.isAuthenticated() ;
        return verified ? children : <Navigate to="/signin" />;
      }


export default PrivateRoute;