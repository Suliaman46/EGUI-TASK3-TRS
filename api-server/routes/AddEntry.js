const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const read = require("./helper/read");

const addEntryRoute = (app, fs) => {
  app.use(bodyParser.urlencoded({ extended: true }));

  // Reading From User Monthly File
  app.post("/addentry", (req, res) => {
    const addHelper = (jsonFileData, params) => {
      const { date, entryDetails, user, file } = params.params;
      const entryId = uuidv4();
      entryDetails["id"] = entryId;
      jsonFileData.entries.push(entryDetails);

      fs.writeFile(
        "./DataBase/Users" + `/${user}/${file}`,
        JSON.stringify(jsonFileData),
        "utf8",
        (err) => {
          if (err) {
            throw err;
          }
        }
      );
      res.status(200).send("New Entry Added");
    };

    const { userName, entryDetails } = req.body;
    const date = entryDetails.date;

    read(
      userName,
      { params: { date: date, entryDetails: entryDetails } },
      addHelper
    );
  });
};

module.exports = addEntryRoute;
