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
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/Login" exact element={<Login />} />
            <Route path="/" exact element={<Login />} />
            <Route path="/Home" exact element={<Home />} />
            <Route path="/AddEntry" exact element={<AddEntry />} />
            <Route path="/EditEntry" exact element={<EditEntry />} />
            <Route path="/AddActivity" exact element={<AddActivity />} />
            <Route path="/MonthlyReport" exact element={<MonthlyReport />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
