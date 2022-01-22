import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AddEntry from "./AddEntry";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import EditEntry from "./EditEntry";
import Login from "./Login";
import AddActivity from "./AddActivity";
import MonthlyReport from "./MonthlyReport";

const App = () => {
  const [userName, setUserName] = useState("");

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

            <Route path="/Home" exact element={<Home userName={userName} />} />
            <Route path="/AddEntry" exact element={<AddEntry />} />
            <Route
              path="/EditEntry"
              exact
              element={<EditEntry userName={userName.current} />}
            />
            <Route path="/AddActivity" exact element={<AddActivity />} />
            <Route path="/MonthlyReport" exact element={<MonthlyReport />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
