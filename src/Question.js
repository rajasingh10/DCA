import React from 'react';
import './Question.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const Question = () => {
    return(
        <div className="question">
            <div className="question_header">
              <h3>Any Questions</h3>
               <h2>Ask here</h2>
            </div>
            <div className="question_form">
                <form>
                <TextField className="textfield" id="outlined-basic" label="Name" variant="outlined" fullWidth/>
                <TextField className="textfield" id="outlined-basic" label="Email" variant="outlined" fullWidth/>
                <TextField className="textfield" id="outlined-basic" label="Phone no." variant="outlined" fullWidth/>
                <TextField
              
                className="textfield"
                variant="outlined"
                id="outlined-basic"
  label="Questions"
  multiline
  rows={2}
  rowsMax={4}
  fullWidth
/>
<Button className="Ask_button" variant="contained" color="primary">ASK</Button>
                </form>
            </div>
        </div>
    )
}

export default Question;