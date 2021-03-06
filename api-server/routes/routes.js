// const activityRoutes = require("./activites");
// const entryRoutes = require("./entry");s
const homeRoutes = require("./home");
const codeListRoute = require("./codeList");
const subCodeListRoute = require("./subCodeList");
const addEntryRoute = require("./addEntry");
const editEntryRoute = require("./editEntry");
const deleteEntryRoute = require("./deleteEntry");
const addActivityRoute = require("./addActivity");

const appRouter = (app, fs) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    next();
  });

  app.get("/", (req, res) => {
    res.send("TRS");
  });

  homeRoutes(app, fs);
  codeListRoute(app, fs);
  subCodeListRoute(app, fs);
  addEntryRoute(app, fs);
  editEntryRoute(app, fs);
  deleteEntryRoute(app, fs);
  addActivityRoute(app, fs);
};

module.exports = appRouter;
