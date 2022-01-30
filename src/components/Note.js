import { Button, Paper } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ title, content, id, deleteNote }) => {
  const clickHandler = () => {
    deleteNote(id);
  };
  return (
    <Paper className="note-paper">
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Button onClick={clickHandler} className="deleteBtn">
        <DeleteIcon style={{ color: "red" }} />
      </Button>
    </Paper>
  );
};

export default Note;
