import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeTable from "./HomeTable";
import "./style.css";

const URL = "http://localhost:3001/Home";

const Home = ({ DateSelected }) => {
  console.log(localStorage.getItem("userName"));
  const userName = JSON.parse(localStorage.getItem("userName"));
  const [entries, setEntries] = useState([]);
  const [dateSelected, setDateSelected] = useState(new Date());

  useEffect(() => {
    const fetchEntries = async () => {
      const result = await axios.get(URL, {
        params: {
          userName: userName,
          dateString: dateSelected.toISOString().substring(0, 10),
        },
      });
      setEntries(result.data);
    };
    fetchEntries();
    DateSelected(dateSelected);
  }, [dateSelected]);
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="px-5">
          <DatePicker
            selected={dateSelected}
            onChange={(date) => {
              setDateSelected(date);
            }}
          />
        </div>

        <div className="pt-2">
          <div className="card-body px-5 py-3 text-center ">
            <HomeTable entries={entries} userName={userName} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
