const userRoutes = require("./users")
const constructorMethod = app => {
    app.use("/", userRoutes);
    app.use("*", (req, res) => {
      res.sendStatus(404);
    });
  };
  
  module.exports = constructorMethod;