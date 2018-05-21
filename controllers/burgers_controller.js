var express = require("express")
var router = express.Router();
var burger = require("../Model/burger.js")

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.selectOne(condition, function (err, data) {
    if (err) {
      return res.status(500).end();
    }
    // come back to this
    console.log(data);
    res.render("burger", data[0])
  });
});

router.post("/api/burgers", function (req, res) {
  burgers.insertOne([
    "name"
  ], [
    req.body.name
  ], function (result) {
    // Send back the ID of the new quote
    res.json({
      id: result.insertId
    });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;