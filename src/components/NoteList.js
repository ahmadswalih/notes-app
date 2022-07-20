import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, addNotes, deleteHandle }) => {
  return (
    <div className="notes-list">
      <AddNote addNotes={addNotes} />
      {notes.length > 0 ? (
        notes.map((note) => (
          <Note deleteHandle={deleteHandle} key={note.id} note={note} />
        ))
      ) : (
        <div>
          <p className="error-text">404</p>
        </div>
      )}
    </div>
  );
};

export default NoteList;
