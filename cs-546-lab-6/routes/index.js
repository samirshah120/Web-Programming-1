const bandRoutes = require("./bands")
const albumRoutes = require("./albums")

const constructorMethod = app => {
    app.use("/bands", bandRoutes);
    app.use("/albums", albumRoutes);
  
    app.use("*", (req, res) => {
      res.sendStatus(404);
    });
  };
  
  module.exports = constructorMethod;
