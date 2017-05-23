// Dependencies
var orm = require("../config/orm.js");
// =============================================================

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function(column, values, callback) {
        orm.insertOne("burgers", column, values, function(res) {
            callback(res);
        });
    },
    updateOne: function(column, values, condition, callback) {
        orm.updateOne("burgers", column, values, condition, function(res) {
            callback(res);
        });
    }
};

// =============================================================
// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;