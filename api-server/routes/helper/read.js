var fs = require("fs");

const read = (userName, params, callback) => {
  const dataPath = "./DataBase/Users";
  const date = params.params.date;
  var userFound = false;
  fs.readdirSync(dataPath).forEach((user) => {
    if (user === userName) {
      userFound = true;
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
  if (userFound == false) {
    // IF USER IS NOT PRESENT
    fs.mkdirSync(`${dataPath}/${userName}`); // Creating folder for user
    fs.writeFileSync(
      `${dataPath}/${userName}/${userName}-${date.substring(0, 7)}.json`,
      JSON.stringify({ entries: [] }),
      "utf8"
    );
    params.params["user"] = userName;
    params.params["file"] = `${userName}-${date.substring(0, 7)}.json`;
    callback({ entries: [] }, params);
  }
};

module.exports = read;
