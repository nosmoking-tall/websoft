"use strict";

var express = require("express");
var router  = express.Router();
var ball = require("./ball.js");

router.get("/", (req, res) => {
    let data = [];
    let number = [];

// Add the dices to the dice hand and roll them once
    for (let i=0; i<7; i++) {
        number[i] = new ball();
        number[i].draw();
    }
    data.number = number;
    res.render("lotto", data);
});

module.exports = router;