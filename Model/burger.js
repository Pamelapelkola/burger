var orm = require("../config/orm")

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    selectOne: function(condition, cb) {
      orm.selectOne("burgers", condition, function(res){
          cb(res);
      });
  },
    insertOne: function(cols, valArr, cb) {
      orm.insertOne("burgers", cols, valArr, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller
  module.exports = burger;
  