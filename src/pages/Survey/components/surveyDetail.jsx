import { useParams } from "react-router";
import { useSelector } from "react-redux";
import React from "react";

const SurveyDetailPage = () => {
    const surveyList = useSelector(state => state.surveys)
    
    const { surveyId } = useParams();
    
    return(
        <React.Fragment>
            {surveyList.map(survey => {
                    if(survey.surveyId == surveyId){
                        return(
                            <React.Fragment>
                                <div>
                                    <b> {survey.surveyName} </b>
                                </div>
                                <div>
                                    {survey.questionList.map(question => {
                                        return (
                                            <React.Fragment>
                                                <p> {question.qId} {question.question}</p>
                                                <label> {question.option1} </label>
                                                <input type="radio"/>
                                                <label> {question.option2} </label>
                                                <input type="radio"/>
                                                <label> {question.option3} </label>
                                                <input type="radio"/>
                                                <label> {question.option4} </label>
                                                <input type="radio"/>

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
        </React.Fragment>
    )
}
export default SurveyDetailPage;