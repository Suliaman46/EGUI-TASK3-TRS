import React from "react";

const HomeTable = ({ entries }) => {
  //   console.log(entries[0].code);
  const renderedTableContent = entries.map(
    ({ date, code, time, description }) => {
      return (
        <tr>
          <td>{date}</td>
          <td>{code}</td>
          <td>{time}</td>
          <td>{description}</td>
        </tr>
      );
    }
  );

  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Code</th>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderedTableContent}</tbody>
      </table>
    </div>
  );
};

export default HomeTable;
