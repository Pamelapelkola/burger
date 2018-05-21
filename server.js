const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path")
const routes = require("./controllers/burgers_controller")

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;


// Static directory to be served
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use("/", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

