import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeTable from "./HomeTable";
const URL = "http://localhost:3001/Home";

const App = () => {
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
  }, [dateSelected]);

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <DatePicker
        selected={dateSelected}
        onChange={(date) => {
          setDateSelected(date);
        }}
      />
      <HomeTable entries={entries} />
    </div>
  );
};

export default App;
