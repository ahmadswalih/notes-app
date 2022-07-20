import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, addNotes, deleteHandle }) => {
  return (
    <div className="notes-list">
      <AddNote addNotes={addNotes} />
      {notes.map((note) => (
        <Note deleteHandle={deleteHandle} key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
