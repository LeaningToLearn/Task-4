const express = require("express");
const router = express.Router();
const { users } = require("../app");


router.get("/users", (req, res, next) => {
  res.render("users.ejs", { users });
});

router.post("/add-user", (req, res, next) => {
    try {
        const {name} = req.body;
        users.push(name)
        res.redirect("/users/users")
    } catch (err) {
        res.status(500).redirect("/404")
    }
});

module.exports = router;
