const palindromcheck = require("./palindromecheck");
const constructorMethod = (app) => {
    app.use("/", palindromcheck);
    app.use("/result", palindromcheck);
    // error page
    app.use("*", (req, res) => {
        res.status(404).json({ error: "Page Not found" });
});
};
module.exports = constructorMethod;

