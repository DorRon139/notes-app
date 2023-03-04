import React, { useState } from "react";
import Footer from "./components/Footer";
import FormArea from "./components/FormArea";
import Header from "./components/Header";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes((preNotes) => {
      return [...preNotes, note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <FormArea addNote={addNote} />
      {notes.map((note, index) => (
        <><Note
          id={index}
          deleteNote={deleteNote}
          title={note.title}
          content={note.content} /><p>Hey</p></>
      ))}
      <Footer />
    </div>
  );
};

export default App;
