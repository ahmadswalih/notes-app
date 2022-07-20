import React, { useState } from "react";
import { toast } from "react-toastify";

const AddNote = ({ addNotes }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    } else {
      toast("max limit exceeded", {
        type: "error",
      });
    }
  };
  const handleSubmit = () => {
    if (noteText.trim().length > 0 && characterLimit - noteText.length >= 0) {
      addNotes(noteText);
      setNoteText("");
    } else {
      toast("Please enter something", {
        type: "error",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="note new">
      <textarea
        value={noteText}
        onChange={handleChange}
        rows="8"
        cols="12"
        placeholder="Type to add a note..."
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button onClick={handleSubmit} type="submit" className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
