const bodyParser = require("body-parser");
const read = require("./helper/read");

const editEntryRoute = (app, fs) => {
  const dataPath = "./DataBase/Users";
  app.use(bodyParser.urlencoded({ extended: true }));

  app.put("/editentry", (req, res) => {
    const editHelper = (jsonFileData, params) => {
      const { entryDetails, user, file } = params.params;
      var index = jsonFileData.entries.findIndex(
        (entry) => entry.id === entryDetails.id
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
    };

    const { userName, entryDetails } = req.body;
    const { date } = entryDetails;

    read(
      userName,
      { params: { date: date, entryDetails: entryDetails } },
      editHelper
    );
  });
};

module.exports = editEntryRoute;
