import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeTable from "./HomeTable";
import AddEntry from "./AddEntry";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import EditEntry from "./EditEntry";
import Login from "./Login";

const URL = "http://localhost:3001/Home";

const App = () => {
  const [userName, setUserName] = useState("");
  console.log(userName, "username in app");

  let dateChosen = "";
  const onDateSelected = (date) => {
    dateChosen = date;
  };

  // useEffect(() => {
  //   localStorage.setItem("userName", JSON.stringify(userName));
  // }, [userName]);
  // const betaSet = (name) => {
  //   setUserName(name);
  // };
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />

          <Routes>
            <Route
              path="/Login"
              exact
              element={<Login setName={setUserName} />}
            />
            <Route path="/" exact element={<Login setName={setUserName} />} />

            <Route
              path="/Home"
              exact
              element={
                <Home DateSelected={onDateSelected} userName={userName} />
              }
            />
            <Route
              path="/AddEntry"
              exact
              element={<AddEntry userName={userName} />}
            />
            <Route
              path="/EditEntry"
              exact
              element={
                <EditEntry userName={userName.current} date={dateChosen} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
