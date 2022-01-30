import { Paper } from '@mui/material';
import React from 'react';

const Note = () => {
  return (
        <Paper className='note-paper'>
            <div>
                <h1>Title</h1>
                <p>Content</p>
            </div>
        </Paper>
    );
};

export default Note;
