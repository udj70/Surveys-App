import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import {Navigate} from "react-router";

import { createSurvey } from "../../../Redux/survey/surveyActions";
import Loading from "../../../components/loading";

const CreateSurvey=()=>{
    //console.log("hello")
    const surveyState=useSelector(state=>state);
    const dispatch=useDispatch()
    const [surveyId,setSurveyId] = useState(0);
    const [surveyName,setSurveyName] = useState("");
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
            const survey={"surveyId":surveyId,
                        "surveyName":surveyName,
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
            <label> survey name</label>
            <input type="text" onChange={(event)=>setSurveyName(event.target.value)}/>
            
            {questionList.map(question => {
                return(    
                    <div>
                        <p>Question {question.qId}- {question.question}</p>
                        <p>a.) {question.option1}</p>
                        <p>b.) {question.option2}</p>
                        <p>c.) {question.option3}</p>
                        <p>d.) {question.option4}</p>

                    </div>
                );
            })}
            <br/>
            <br/>
            <button type="button" onClick={handleAddQuestion}>Add question</button>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>


        </React.Fragment>
    );
}

export default CreateSurvey;