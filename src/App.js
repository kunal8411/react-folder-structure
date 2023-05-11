import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import FileTree from "./FileTree";
function App() {
  const [folders, setFolders] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/api")
      .then((res) => {
        setFolders(res.data.documentsTree);
        console.log({ res });
      })
      .catch((err) => console.log({ err }));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <FileTree folders={folders}/>
      </header>
    </div>
  );
}

export default App;
