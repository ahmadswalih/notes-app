import React from "react";
import { MdDeleteForever, MdContentCopy } from "react-icons/md";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";

const Note = ({ note, deleteHandle }) => {
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <div className="icons-div">
          <CopyToClipboard
            onCopy={() =>
              toast("Note copied to clipboard", {
                type: "success",
                position: "bottom-center",
              })
            }
            text={note.text}
          >
            <MdContentCopy
              size="1.3em"
              style={{
                paddingRight: "10px",
                cursor: "pointer",
              }}
            />
          </CopyToClipboard>

          <MdDeleteForever
            onClick={() => deleteHandle(note.id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
