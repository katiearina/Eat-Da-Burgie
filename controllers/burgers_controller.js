// Dependencies
var express = require("express");
var router = express.Router();

// Import the burger model
var burger = require("../models/burger.js");
// =============================================================

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
        });
    });

// =============================================================
// Export routes for server.js to use.
module.exports = router;