let express = require('express');
let app = express();

console.log("Hello World");


app.get("/", function (req, res) {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Node.js listening on port " + PORT);
});

































 module.exports = app;
