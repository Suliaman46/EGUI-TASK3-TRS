import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeTable from "./HomeTable";
import "./style.css";
import moment from "moment";

const URL_REST = "http://localhost:3001/Home";
const URL_STATIC = "http://localhost:3001/users/";

const ReportView = ({ isHome }) => {
  const [title, setTitle] = useState("");
  const userName = JSON.parse(localStorage.getItem("userName"));
  const [entries, setEntries] = useState([]);
  const [dateSelected, setDateSelected] = useState(new Date());
  const [needRefresh, setNeedRefresh] = useState(false);

  const OnNeedRefresh = () => {
    setNeedRefresh(!needRefresh);
  };
  useEffect(() => {
    const fetchEntries = async () => {
      if (isHome) {
        setTitle(moment(dateSelected).format("D MMMM yyyy"));
        const result = await axios.get(URL_REST, {
          params: {
            userName: userName,
            dateString: dateSelected.toISOString().substring(0, 10),
          },
        });
        setEntries(result.data);
      } else {
        setTitle(moment(dateSelected).format("MMMM yyyy"));
        const result = await axios.get(
          `${URL_STATIC}/${userName}/${userName}-${dateSelected
            .toISOString()
            .substring(0, 7)}.json`
        );
        setEntries(result.data.entries);
      }
    };
    fetchEntries();
  }, [dateSelected, needRefresh]);
  return (
    <section className="min-vh-100 gradient-custom">
      <div className="py-3 text-center text-white">
        <h1>Entries For {title}</h1>
      </div>
      <div className="container py-2 h-100">
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
            <HomeTable
              entries={entries}
              userName={userName}
              OnNeedRefresh={OnNeedRefresh}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportView;
