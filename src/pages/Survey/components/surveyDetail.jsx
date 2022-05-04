import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";

import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";

import { saveResponses } from "../../../Redux/survey/surveyActions";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Question from '../../../components/question';
import Loading from "../../../components/loading";

const SurveyDetailPage = () => {
    const surveyList = useSelector(state => state.survey.surveys)
    const dispatch = useDispatch()
    const { surveyId } = useParams();
    
    const [responseList, setResponseList] = useState([])
    const [redirect,setRedirect] =useState(false);
    const [loading,setLoading] =useState(false);
    
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>setLoading(false),1000);
    },[])

    const handleChange = (value, qId)=>{
        const response={
            "qId":qId,
            "Option1":value=="Option1" ? 1 : 0,
            "Option2":value=="Option2" ? 1 : 0,
            "Option3":value=="Option3" ? 1 : 0,
            "Option4":value=="Option4" ? 1 : 0
        }
        const otherResponse=responseList.filter(res=>res.qId!==qId)
        console.log([...otherResponse,response])
        setResponseList([...otherResponse,response])
        
    }
    const handleSubmit = (event)=>{
        const surveyResponse = {
            surveyId:surveyId,
            responseList:responseList
        }
        dispatch(saveResponses(surveyResponse))
        setRedirect(true)
    }
    if(redirect){
        return(<Navigate to="/"/>)
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
        <React.Fragment>
            {surveyList.map(survey => {
                    if(survey.surveyId == surveyId){
                        return(
                            <React.Fragment>
                                
                                <Typography gutterBottom variant="h5" component="h2">
                                    <b>{survey.surveyName}</b>
                                </Typography>
                                <div>
                                    {survey.questionList.map(question => {
                                        return (
                                            <React.Fragment>
                                                
                                                <Question question={question} handleChange={handleChange}/>
                                                <br/>
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                            </React.Fragment>
                        );
                    }else{
                        return (<></>)
                    }
                    
                
            })}
            <Link to={"/surveyResults/"+ surveyId}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Save responses
                </Button>
            </Link>
        </React.Fragment>
    )
}
export default SurveyDetailPage;