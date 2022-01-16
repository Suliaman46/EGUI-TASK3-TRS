const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");

const addEntryRoute = (app, fs) => {
  const dataPath = "./DataBase/Users";
  app.use(bodyParser.urlencoded({ extended: true }));

  // Reading From User Monthly File
  app.post("/addentry", (req, res) => {
    // console.log(req.body);
    const userName = req.body.userName;
    const entryDetails = req.body.entryDetails;
    console.log(entryDetails);
    const date = entryDetails.date;
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
              const entryId = uuidv4();
              entryDetails["id"] = entryId;
              console.log(entryDetails);
              jsonFileData.entries.push(entryDetails);
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
              res.status(200).send("New Entry Added");
              return;
            });
          }
        });
      }
    });
  });
};

module.exports = addEntryRoute;
