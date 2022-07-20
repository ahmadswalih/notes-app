import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes }) => {
  return (
    <div className="notes-list">
      <AddNote />
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
