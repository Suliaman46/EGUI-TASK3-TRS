const codeListRoute = (app, fs) => {
  const dataPath = "./DataBase";

  // Reading From User Monthly File
  app.get("/codelist", (req, res) => {
    const codes = [];

    fs.readFile(dataPath + `/activity.json`, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      jsonFileData = JSON.parse(data);
      jsonFileData.activities.forEach((activity) => {
        codes.push(activity.code);
      });
      res.send(codes);
      return;
    });
  });
};

module.exports = codeListRoute;
