const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const path = require("path");

const users = [];
module.exports = {users};
// ROUTES
const homeRoute = require("./routes/home");
const usersRoutes = require("./routes/users");

app.set("view engine", "ejs");
//app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(homeRoute);
app.use("/users", usersRoutes);
app.use("/", (req, res, next) => {
    res.status(404).setHeader("Location", "/404").render("404.ejs");
});

app.listen(3000);