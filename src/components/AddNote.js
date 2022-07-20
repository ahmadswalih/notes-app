import React from "react";

const AddNote = () => {
  return (
    <div className="note new">
      <textarea rows="8" cols="12" placeholder="Type to add a note..." />
      <div className="note-footer">
        <small>200 remaining</small>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default AddNote;
