import React, { useEffect ,useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../../../components/loading";


const SurveyList=()=>{
    const surveyList = useSelector(state => state.surveys);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
            setLoading(true);
            setTimeout(()=>setLoading(false),1000);
        },
    []);
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
    if(!surveyList.length){
        return(
            <div>No surveys Present. Create a survey</div>
        )
    }
    return(
        <React.Fragment>
            {surveyList.map(survey=>{
                return(
                    <div>
                        {survey.surveyId} {survey.surveyName} <span> <Link to = {"/surveyDetailPage/" + survey.surveyId}> Take Survey </Link></span>
                    </div>
                )
            })}
        </React.Fragment>
    )
}
export default SurveyList