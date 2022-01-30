import { Fab, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

const FormArea = () => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const changeHandler = (event) => {
        const {name, value} = event.target
        setNote(preValues => {
            return{
                ...preValues,
                [name]: value
            }
        });
    };

    console.log(note);
    return (
        <Paper className='form-text-area'>
            <form>
                <TextField 
                    onChange={changeHandler}
                    name="title"
                    value={note.title} 
                    label='Title' 
                    fullWidth 
                    autoComplete='off'
                />
                <TextField 
                    onChange={changeHandler}
                    name="content"
                    value={note.content} 
                    style={{marginTop: "12px"}} 
                    label='Content' 
                    multiline rows={4}
                    fullWidth 
                    autoComplete='off'
                />
                <Fab style={{marginTop: "20px"}}><AddIcon /></Fab>
            </form>
        </Paper>
    );
};

export default FormArea;
