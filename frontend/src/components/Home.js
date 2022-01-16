import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeTable from "./HomeTable";

const URL = "http://localhost:3001/Home";

const Home = ({ DateSelected, userName }) => {
  const [entries, setEntries] = useState([]);
  const [dateSelected, setDateSelected] = useState(new Date());

  useEffect(() => {
    const fetchEntries = async () => {
      const result = await axios.get(URL, {
        params: {
          userName: "kowalski",
          dateString: dateSelected.toISOString().substring(0, 10),
        },
      });
      setEntries(result.data);
    };
    fetchEntries();
    DateSelected(dateSelected);
  }, [dateSelected]);
  return (
    <div className="container pt-2">
      <DatePicker
        selected={dateSelected}
        onChange={(date) => {
          setDateSelected(date);
        }}
      />
      <div className="pt-2">
        <HomeTable entries={entries} userName="kowalski" />
      </div>
    </div>
  );
};

export default Home;
