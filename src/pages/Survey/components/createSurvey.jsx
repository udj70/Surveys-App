import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import {Navigate} from "react-router";
import {Link} from "react-router-dom";

import { createSurvey } from "../../../Redux/survey/surveyActions";
import Loading from "../../../components/loading";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CreateSurvey=()=>{
    //console.log("hello")
    const surveyState=useSelector(state=>state.survey);
    const dispatch=useDispatch()
    const [surveyId,setSurveyId] = useState(0);
    const [surveyName,setSurveyName] = useState("");
    const [surveyDetails,setSurveyDetails] = useState("");
    const [questionList,setQuestionList] = useState([])
    const [errorText,setErrorText] = useState("")
    const [redirect,setRedirect] = useState(false)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
            setSurveyId(surveyState.surveys.length ? parseInt(surveyState.surveys[surveyState.surveys.length -1].surveyId) + 1: 1 );
            setLoading(true);
            setTimeout(()=>setLoading(false),1000);
        },
    [])


    const handleSubmit= ()=>{
        if(questionList.length){
            const survey={"user" : sessionStorage.getItem("user"),
                        "surveyId":surveyId,
                        "surveyName":surveyName,
                        "surveyDetails":surveyDetails,
                    "questionList":questionList}
            dispatch(createSurvey(survey))   
            setTimeout(()=>setLoading(true),1000)
            setRedirect(true)
        }else{
            setErrorText("Enter atleast 1 question")
            alert(errorText)
        }
    }

    const handleAddQuestion=()=>{
        
        var question = prompt("Enter the question")
        var option1 = prompt("Enter option 1")
        var option2 = prompt("Enter option 2")
        var option3 = prompt("Enter option 3")
        var option4 = prompt("Enter option 4")

        const questionObject = {
            "qId" : questionList.length ? parseInt(questionList[questionList.length-1].qId) + 1 : 1,
            "question" : question,
            "option1" : option1,
            "option2" : option2,
            "option3" : option3,
            "option4" : option4
        }
        var newQuestionList=[...questionList,questionObject]
        setQuestionList(newQuestionList)

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
            
            <br/>
            <br/>
            <TextField id="outlined-basic" value={surveyName} label="Survey Name" variant="outlined" onChange={(event)=>setSurveyName(event.target.value)} />
            <br/>
            <br/>
            <TextField id="outlined-basic" value={surveyDetails} label="Survey Detail" variant="outlined" onChange={(event)=>setSurveyDetails(event.target.value)} />
            {questionList.map(question => {
                return(    
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                             Q.{question.qId}- {question.question}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            a.) {question.option1}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            b.) {question.option2}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            c.) {question.option3}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            d.) {question.option4}
                        </Typography>
                  </CardContent>
                );
            })}
            <br/>
            <br/>
            

            <Button variant="contained" color="primary" onClick={handleAddQuestion}>
                        Add Question
            </Button>
            <br/>
            <br/>
            <Button variant="contained" color="secondary" onClick={handleSubmit}>
                        Submit
            </Button>
            

        </React.Fragment>
    );
}

export default CreateSurvey;