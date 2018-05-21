var orm = require("../config/orms.js")

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
   
    insertOne: function(objColVals, condition, cb) {
      orm.insertOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    updateOne: function(condition, cb) {
      orm.updateOne("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller
  module.exports = burger;
  