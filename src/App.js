import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my firest Note",
      date: "20/07/2022",
    },
    {
      id: nanoid(),
      text: "This is my second Note",
      date: "20/07/2022",
    },
    {
      id: nanoid(),
      text: "This is my third Note",
      date: "20/07/2022",
    },
    {
      id: nanoid(),
      text: "This is my forth Note",
      date: "20/07/2022",
    },
  ]);

  //AddNotes Function
  const addNotes = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  //DeletNotes Function
  const DeletNotes = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      <ToastContainer />
      <NoteList
        deleteHandle={DeletNotes}
        addNotes={addNotes}
        setNotes={setNotes}
        notes={notes}
      />
    </div>
  );
};

export default App;
