const homeRoutes = (app, fs) => {
  const dataPath = "./DataBase/Users";

  // Reading From User Monthly File
  app.get("/home", (req, res) => {
    const entriesToReturn = [];

    const userName = req.query.userName;
    const date = req.query.dateString;

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
              jsonFileData.entries.forEach((entry) => {
                if (entry.date === date) {
                  entriesToReturn.push(entry);
                  console.log(entriesToReturn);
                }
              });
              res.send(entriesToReturn);
              return;
            });
          }
        });
      }
    });
    res.send(entriesToReturn);
  });
};

module.exports = homeRoutes;
