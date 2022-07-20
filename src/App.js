import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList";

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
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
