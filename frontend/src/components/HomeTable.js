import axios from "axios";
import React, { useState } from "react";

import Table from "react-bootstrap/Table";
const HomeTable = ({ entries, userName }) => {
  const [needRefresh, setNeedRefresh] = useState(false);
  const onDeleteClicked = async (id) => {
    var payload = {};
    payload["userName"] = userName;
    payload["date"] = new Date().toISOString().substring(0, 10);
    payload["id"] = id;
    console.log(payload);
    const result = await axios.delete("http://localhost:3001/Home", {
      data: payload,
    });
    setNeedRefresh(!needRefresh);
  };

  let num = 0;
  const renderedTableContent = entries.map(
    ({ date, code, time, description, id }) => {
      num = parseInt(time) + num;
      return (
        <tr key={id}>
          <td>{date}</td>
          <td>{code}</td>
          <td>{time}</td>
          <td>{description}</td>
          <td>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-warning">
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  onDeleteClicked(id);
                }}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      );
    }
  );

  return (
    <div>
      <Table striped bordered hover>
        <tbody id="section1" style={{ textAlign: "center" }}>
          <tr style={{ textAlign: "center" }} className="grouplabel  bg-dark ">
            <th colSpan="5" className="text-white">
              Entry Details
            </th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Code</th>
            <th>Time</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </tbody>
        <tbody id="section2" style={{ textAlign: "center" }}>
          {renderedTableContent}
        </tbody>
        <tbody id="section3">
          <tr style={{ textAlign: "center" }} className="grouplabel  bg-dark ">
            <th colSpan={5} className="text-white">
              Total Time Today :
            </th>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <th colSpan={5}>{num}</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default HomeTable;
