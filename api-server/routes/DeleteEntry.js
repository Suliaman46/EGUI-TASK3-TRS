const bodyParser = require("body-parser");

const deleteEntryRoute = (app, fs) => {
  const dataPath = "./DataBase/Users";
  app.use(bodyParser.urlencoded({ extended: true }));

  // Reading From User Monthly File
  app.delete("/home", (req, res) => {
    console.log(req.body);
    const { userName, date, id } = req.body;
    // const userName = req.body.userName;
    // const entryDetails = req.body.entryDetails;
    // console.log(entryDetails);
    // const date = entryDetails.date;
    // console.log(userName, date);
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
              console.log(jsonFileData);
              const filteredFileData = jsonFileData.entries.filter(
                (entry) => entry.id !== id
              );
              jsonFileData.entries = filteredFileData;
              console.log(jsonFileData);
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
              res.status(200).send(" Entry Deleted");
              return;
            });
          }
        });
      }
    });
  });
};

module.exports = deleteEntryRoute;
