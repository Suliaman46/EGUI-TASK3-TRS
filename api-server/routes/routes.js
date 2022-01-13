// const activityRoutes = require("./activites");
// const entryRoutes = require("./entry");s
const homeRoutes = require("./home");

const appRouter = (app, fs) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/", (req, res) => {
    res.send("TRS");
  });

  //   activityRoutes(app, fs);
  //   entryRoutes(app, fs);
  homeRoutes(app, fs);
};

module.exports = appRouter;
