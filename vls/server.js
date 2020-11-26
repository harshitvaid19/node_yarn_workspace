const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const cl = require('../models')

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

require("./app/routes/test.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(cl)
	cl()
  console.log(`Server is running on port ${PORT}.`);
});