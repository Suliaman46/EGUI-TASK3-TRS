const { json } = require("body-parser");
const { query } = require("express");
var fs = require("fs");

const read = (userName, params, callback) => {
  const dataPath = "./DataBase/Users";
  const date = params.params.date;
  fs.readdirSync(dataPath).forEach((user) => {
    if (user === userName) {
      fs.readdirSync(dataPath + `/${user}`).forEach((file) => {
        if (
          file.substring(file.length - 12, file.length - 5) ===
          date.substring(0, 7)
        ) {
          fs.readFile(dataPath + `/${user}/${file}`, "utf8", (err, data) => {
            if (err) {
              throw err;
            }
            jsonFileData = JSON.parse(data);
            params.params["user"] = user;
            params.params["file"] = file;
            callback(jsonFileData, params);
          });
        }
      });
    }
  });
};

module.exports = read;
