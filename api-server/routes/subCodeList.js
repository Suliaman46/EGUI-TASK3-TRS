const subCodeListRoute = (app, fs) => {
  const dataPath = "./DataBase";

  // Reading From User Monthly File
  app.get("/subcodelist", (req, res) => {
    const subActivities = [];
    const code = req.query.code;
    console.log(code);
    fs.readFile(dataPath + `/activity.json`, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      jsonFileData = JSON.parse(data);
      jsonFileData.activities.forEach((activity) => {
        if (activity.code === code) {
          activity.subactivities.forEach((subCode) => {
            subActivities.push(subCode.code);
          });
          res.send(subActivities);
          return;
        }
      });
      return;
    });
  });
};

module.exports = subCodeListRoute;
