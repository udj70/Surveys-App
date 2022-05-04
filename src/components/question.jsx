import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Question =(props)=>{
    const {question, handleChange}=props;
    const handleSelection=(event)=>{
        handleChange(event.target.value,question.qId)
        console.log(event.target.value)
    }
    return (
        <React.Fragment>
            <FormControl component="fieldset">
                    <FormLabel component="legend">Question {question.qId} - {question.question}</FormLabel>
                    <RadioGroup aria-label="Question" name="Question" onChange={handleSelection}>    
                        <FormControlLabel value="Option1" control={<Radio />} label={question.option1} />
                        <FormControlLabel value="Option2" control={<Radio />} label={question.option2} />
                        <FormControlLabel value="Option3" control={<Radio />} label={question.option3} />
                        <FormControlLabel value="Option4" control={<Radio />} label={question.option4} />
                    </RadioGroup>  
            </FormControl>
        </React.Fragment>
        
        )
}

export default Question;