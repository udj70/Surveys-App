import React , {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

import Loading from "../../../components/loading";

const SurveyResult = () =>{
    const { surveyId } =useParams()
    const [loading,setLoading] = useState(false);
    const responses=useSelector(state=>state.survey.responses);
    const surveyResponse=responses.filter(res=>res.surveyId==surveyId);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>setLoading(false),1000);
    },
    [])

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
    if(!surveyResponse.length){
        return(<p>Nobody Responded to survey yet</p>)
    }
    return (
        <React.Fragment>
            {surveyResponse[0].responseList.map((res => {
                return(
                    <React.Fragment>
                        <p> <b>Question- {res.qId}</b> </p>
                        <p> Option 1 - {(res.Option1/(res.Option1+res.Option2+res.Option3+res.Option4))*100}%</p>
                        <p> Option 2 - {(res.Option2/(res.Option1+res.Option2+res.Option3+res.Option4))*100}%</p>
                        <p> Option 3 - {(res.Option3/(res.Option1+res.Option2+res.Option3+res.Option4))*100}%</p>
                        <p> Option 4 - {(res.Option4/(res.Option1+res.Option2+res.Option3+res.Option4))*100}%</p>
                    </React.Fragment>
                )
            }))}
            <Link to="/" style={{textDecoration : 'none'}}>
                <Button variant="contained" color="primary">
                        Back to homepage
                </Button>
            </Link>
        </React.Fragment>
    );
}
export default SurveyResult;