import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Table from "react-bootstrap/Table";
const HomeTable = ({ entries, userName, OnNeedRefresh }) => {
  const navigate = useNavigate();

  const onDeleteClicked = async (id) => {
    var payload = {};
    payload["userName"] = userName;
    payload["date"] = new Date().toISOString().substring(0, 10);
    payload["id"] = id;
    await axios.delete("http://localhost:3001/Home", {
      data: payload,
    });
    OnNeedRefresh();
  };

  let num = 0;
  const renderedTableContent = entries.map(
    ({ date, code, subCode, time, description, id }) => {
      num = parseInt(time) + num;
      return (
        <tr key={id}>
          <td>{date}</td>
          <td>{code}</td>
          <td>{subCode}</td>
          <td>{time}</td>
          <td>{description}</td>
          <td>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-dark btn-outline-warning  "
                type="button"
                onClick={() => {
                  navigate("/EditEntry", {
                    state: {
                      entryID: id,
                      userName: userName,
                      dateString: date,
                      code: code,
                      subCode: subCode,
                      description: description,
                      time: time,
                    },
                  });
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-dark btn-outline-danger"
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
      <Table striped bordered hover className="table-dark">
        <tbody id="section1" style={{ textAlign: "center" }}>
          <tr style={{ textAlign: "center" }} className="grouplabel  bg-dark ">
            <th colSpan="6" className="text-white">
              Entry Details
            </th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Code</th>
            <th>Sub Code</th>
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
            <th colSpan={6} className="text-white">
              Total Time Today :
            </th>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <th colSpan={6}>{num}</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default HomeTable;
