const bodyParser = require("body-parser");
const read = require("./helper/read");

const deleteEntryRoute = (app, fs) => {
  app.use(bodyParser.urlencoded({ extended: true }));

  // Reading From User Monthly File
  app.delete("/home", (req, res) => {
    const deleteHelper = (jsonFileData, params) => {
      const { id, user, file } = params.params;
      const filteredFileData = jsonFileData.entries.filter(
        (entry) => entry.id !== id
      );
      jsonFileData.entries = filteredFileData;

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
      res.status(200).send(" Entry Deleted");
    };

    const { userName, date, id } = req.body;
    read(userName, { params: { date: date, id: id } }, deleteHelper);
  });
};

module.exports = deleteEntryRoute;
