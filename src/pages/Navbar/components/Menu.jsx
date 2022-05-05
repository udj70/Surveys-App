import { Link } from 'react-router-dom';
import auth from '../../../auth';
import '../styles/Menu.css';
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
  
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }


const Menu=(props)=>{
    
    // const dispatch=useDispatch();
    
    return(<div className='root'>

                    <div className='logo'>
                        <Link to='/' className='link-logo'>
                            <div> Surveys App </div>                
                        </Link>
                    </div>   
                   
                    {!auth.isAuthenticated() && 
                        (<div className='nav'>
                            <Link to='/signin' className='link' >
                                Signin
                            </Link>
                        </div>)
                    }        
                    {auth.isAuthenticated() && (<div className='nav'>
                                                
                                                        <Link to='/' className='link' onClick={()=>{sessionStorage.removeItem("user")}}>
                                                            Logout
                                                        </Link>
                                                    
                                                </div>)
                    }    
                    {auth.isAuthenticated() && (<div className='nav'>
                                                
                                                <Link to='/mySurvey' className='link'>
                                                    My Surveys
                                                </Link>
                                            
                                        </div>)
                    }    
                   
                    <div className='nav'>
                            <Link to='/createSurvey' className='link' >
                                Create Survey
                            </Link>
                    </div>

                    
                    
                   
            

            </div>

               )}
export default withRouter(Menu);