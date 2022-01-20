const bodyParser = require("body-parser");

const addActivityRoute = (app, fs) => {
  const dataPath = "./DataBase/activity.json";
  app.use(bodyParser.urlencoded({ extended: true }));

  // Reading From User Monthly File
  app.post("/addactivity", (req, res) => {
    const { activityDetails } = req.body;
    console.log(activityDetails, "from addactivity");
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      jsonFileData = JSON.parse(data);
      jsonFileData.activities.push(activityDetails);
      fs.writeFile(dataPath, JSON.stringify(jsonFileData), "utf8", (err) => {
        if (err) {
          throw err;
        }
      });
      res.status(200).send("New Activity Added");
    });
  });
};

module.exports = addActivityRoute;
