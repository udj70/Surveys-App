
//import { red } from "@material-ui/core/colors";
import { useSelector, useDispatch } from "react-redux";
import {  useEffect, useState } from "react"
import { Navigate } from "react-router"

import { makeStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {CardContent, CardActions} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Loading from '../../../components/loading';

import {createUser} from "../../../Redux/users/userActions";

const useStyles = makeStyles({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: 5,
        paddingBottom: 2
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: 2,
        color:'red',
        //fontSize:30
    },
    textField: {
        marginLeft: 10,
        marginRight: 10,
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: 20
    },
    highlights:{
        marginTop: 2,
        color:'red'
    }
});
function Signin(props){
    const users= useSelector(state=>state.user.users);
    const dispatch = useDispatch();

    const [userid,setName]=useState('')
    const [password,setPass]=useState('')
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false);
    const [redirectToReffferer,setRedirect]=useState(false)
    const [open,setOpen]=useState(false);
    const [newUserId,setNewUserId]=useState('');
    const [newUserPassword,setNewUserPassword]=useState('');
   
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{setLoading(false)},1000);
    },[])
    
    const handleClick=()=>{
        const selected_user=users.filter(user=>user.userid===userid && user.password===password);
        if(selected_user.length){
            setRedirect(true);
        }
        else{
            setError("Invalid Username or Password");
        }
    }
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        dispatch(createUser({"userid":newUserId,
                            "password":newUserPassword}))
        setLoading(true);
        setTimeout(()=>{setLoading(false)},1000);
        setOpen(false);
      };
   
    const classes=useStyles();
    
    if(redirectToReffferer){
        const from=(window.history.state.state!==undefined)?(window.history.state.state.from.pathname!==undefined?window.history.state.state.from.pathname:window.history.state.state.from):'/'
        return(<Navigate to={from}/>)
    }
    if(loading){
        return(
            <div style={{position:'absolute',left: '50%', top: '50%',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                <Loading/>
               </div> 
                    )          
    }
    return(
        
        <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" variant="h4" className={classes.title}>                        
                        Sign In
                    </Typography>
                    <TextField id="email" label="Email" type="email"  className={classes.textField} value={userid} onChange={(event)=>{setName(event.target.value);setError('')}} margin="normal"></TextField> <br />
                    <TextField id="password" label="Password" type="password" className={classes.textField} value={password} onChange={(event)=>{setPass(event.target.value);setError('')}} margin="normal"></TextField> <br />
                   
                </CardContent>
                { error!='' &&
                    (<Typography type="headline" variant="h6" className={classes.highlights}>                        
                        {error}
                    </Typography>)
                }    
                <CardActions>
                    <Button color="primary" variant="contained" onClick={handleClick} className={classes.submit}>
                        Login
                    </Button>
                    <Button color="primary" variant="contained" onClick={handleClickOpen} className={classes.submit}>
                        New User?
                    </Button>
                </CardActions>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <Typography type="headline" variant="h4" className={classes.title}>                        
                            New User
                        </Typography>
                        <TextField id="email" label="Email" type="email"  className={classes.textField} value={newUserId} onChange={(event)=>setNewUserId(event.target.value)} margin="normal"></TextField> <br />
                        <TextField id="password" label="Password" type="password" className={classes.textField} value={newUserPassword} onChange={(event)=>setNewUserPassword(event.target.value)} margin="normal"></TextField> <br />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" variant="contained">
                            Create User
                        </Button>
                    
                    </DialogActions>
                </Dialog>
                
                <Typography type="headline" variant="h6" className={classes.highlights}>                        
                        Defaults credentials
                    </Typography>
                <Typography type="headline" variant="body" component='p'>                        
                        username: abc &nbsp; &nbsp;   
                        password: xyz
                </Typography>
               
            </Card>
    )
}


export default Signin;