import React, { useState , useEffect} from "react";
import { useSelector }  from "react-redux";

import { Link } from "react-router-dom";

import Loading from "../../../components/loading";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      display: 'inline-block',
      margin: '3px'
    },
    pos: {
      marginBottom: 12,
      display:'inline-block',
      margin: '3px'
    },
    button:{
        display:'inline-block',
        float:'right',
        alignContent: 'center'
    },
    content:{
        display:'inline-block'
    }
  });
  
const MySurveys = ()=>{
    const surveyState = useSelector(state=>state.survey)
    const currentUser=sessionStorage.getItem("user")
    const currentUserSurveys = surveyState.surveys.filter(survey => survey.user == currentUser ) 
    
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>setLoading(false),1000);
    },
    []);

    const classes =useStyles();
    
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
        <React.Fragment>
            {currentUserSurveys.map(survey => {
                return(
                    <Card className={classes.root} variant="outlined">
                        <CardContent className={classes.content}>
                            <Typography className={classes.title} color="initial" component="h2" variant="h5" gutterBottom>
                                {survey.surveyId}
                            </Typography>
                            
                            <Typography className={classes.pos} component="h2" vriant="h5" color="intial">
                                {survey.surveyName}
                            </Typography>
                            <Typography variant="body2" component="p" color="textSecondary">
                            {survey.surveyDetails}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.button}>
                            <Link to = {"/surveyResults/" + survey.surveyId} style={{textDecoration : 'none'}}> 
                                <Button size="small" variant="contained" color="primary">Survey Results</Button>
                            </Link>
                        </CardActions>
                    </Card>
                )})}
        </React.Fragment>
    )

}
export default MySurveys;