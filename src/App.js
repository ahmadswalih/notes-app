import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  //Retrieve the data from the localStorage on the first loading
  const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
  useEffect(() => {
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <ToastContainer />
        <Header handleDarkMode={setDarkMode} isDark={darkMode} />
        <Search handleSearch={setSearchText} />
        <NoteList
          deleteHandle={DeletNotes}
          addNotes={addNotes}
          setNotes={setNotes}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
        />
      </div>
    </div>
  );
};

export default App;
