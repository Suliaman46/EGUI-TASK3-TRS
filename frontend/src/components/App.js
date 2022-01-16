import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeTable from "./HomeTable";
import AddEntry from "./AddEntry";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

const URL = "http://localhost:3001/Home";

const App = () => {
  let dateChosen = "";
  const onDateSelected = (date) => {
    dateChosen = date;
  };
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home DateSelected={onDateSelected} userName="kowalski" />
              }
            />
            <Route
              path="/AddEntry"
              exact
              element={<AddEntry userName="kowalski" date={dateChosen} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
