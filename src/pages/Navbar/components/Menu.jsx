import { useSelector, useDispatch } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import '../styles/Menu.css';
const Menu=()=>{
    
    // const dispatch=useDispatch();
    
    return(<div className='root'>

                    <div className='logo'>
                        <Link to='/' className='link-logo'>
                            <div> Surveys App </div>                
                        </Link>
                    </div>   
                   
                

                    <div className='nav'>
                        <Link to='/about' className='link'>
                            About
                        </Link>
                    </div>   
                    
                    {/* {!auth.isAuthenticated() && 
                        (<div className='nav'>
                            <Link to='/signin' className='link' >
                                Signin
                            </Link>
                        </div>)
                    }         */}
                    {/* {auth.isAuthenticated() && (<div className='nav'>
                                                
                                                        <Link to='/' className='link' onClick={()=>{auth.signout(); dispatch(deleteCart())}}>
                                                            Logout
                                                        </Link>
                                                    
                                                </div>)
                    }     */}
         
                    <div className='nav'>
                            <Link to='/allusers' className='link' >
                                All Users
                            </Link>
                    </div>

                    <div className='nav'>
                            <Link to='/createSurvey' className='link' >
                                Create Survey
                            </Link>
                    </div>

                    
                    
                   
            

            </div>

               )}
export default Menu;