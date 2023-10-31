import React from "react";
import "./App.css";
import Create from "./Components/Create";
import Read from "./Components/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Components/Update";

const App = () => {
  return (
    <>
     <div className="container">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create/>}/>
        <Route exact path="/read" element={<Read/>}/>
        <Route exact path="/update" element={<Update/>}/>

      </Routes>
      </BrowserRouter>
      </div>
    </>
  );
};
export default App;
