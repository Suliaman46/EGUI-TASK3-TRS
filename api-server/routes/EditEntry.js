const bodyParser = require("body-parser");

const editEntryRoute = (app, fs) => {
  const dataPath = "./DataBase/Users";
  app.use(bodyParser.urlencoded({ extended: true }));

  // Reading From User Monthly File
  app.put("/editentry", (req, res) => {
    const userName = req.body.userName;
    const entryDetails = req.body.entryDetails;
    const date = entryDetails.date;
    const entryID = entryDetails.id;
    console.log(userName, date);
    fs.readdirSync(dataPath).forEach((user) => {
      if (user === userName) {
        console.log("user found");
        fs.readdirSync(dataPath + `/${user}`).forEach((file) => {
          if (
            file.substring(file.length - 12, file.length - 5) ===
            date.substring(0, 7)
          ) {
            console.log("file found");

            fs.readFile(dataPath + `/${user}/${file}`, "utf8", (err, data) => {
              if (err) {
                throw err;
              }
              jsonFileData = JSON.parse(data);
              var index = jsonFileData.entries.findIndex(
                (entry) => entry.id === entryID
              );
              jsonFileData.entries[index] = entryDetails;

              fs.writeFile(
                dataPath + `/${user}/${file}`,
                JSON.stringify(jsonFileData),
                "utf8",
                (err) => {
                  if (err) {
                    throw err;
                  }
                }
              );
              res.status(200).send(" Entry Edited");
              return;
            });
          }
        });
      }
    });
  });
};

module.exports = editEntryRoute;
