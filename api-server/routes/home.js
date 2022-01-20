const read = require("./helper/read");

const homeRoutes = (app, fs) => {
  const dataPath = "./DataBase/Users";

  // Reading From User Monthly File
  app.get("/home", (req, res) => {
    const getDailyEntriesHelper = (jsonFileData, params) => {
      const entriesToReturn = [];
      jsonFileData.entries.forEach((entry) => {
        if (entry.date === params.params.date) {
          entriesToReturn.push(entry);
        }
      });
      res.send(entriesToReturn);
    };

    const userName = req.query.userName;
    const date = req.query.dateString;
    read(userName, { params: { date: date } }, getDailyEntriesHelper);
  });
};

module.exports = homeRoutes;
