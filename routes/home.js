const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("index.ejs", {
        title: "Some fancy title"
    })
});

module.exports = router;