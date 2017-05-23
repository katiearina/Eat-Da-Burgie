// Dependencies
var express = require("express");
var router = express.Router();

// Import the burger model
var burger = require("../models/burger.js");
// =============================================================

router.get("/", function(request, response) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        response.render("index", handlebarsObject);
        });
});

router.post("/", function(request, response) {
    burger.insertOne("burger_name", request.body.burger_name,
        function(data) {
            var handlebarsObject = {
                burgers: data
            };
        console.log(handlebarsObject);
        response.redirect("/");
    });
});

router.put("/:id", function(request, response) {
    var condition = "id = " + request.params.id;
    console.log(condition);
    burger.updateOne("devoured", 1, condition, function(data) {
            var handlebarsObject = {
                burgers: data
            };
        console.log(handlebarsObject);
        response.redirect("/");
    });
});

// =============================================================
// Export routes for server.js to use.
module.exports = router;