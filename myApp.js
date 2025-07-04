let express = require('express');
let app = express();app.get("/", function (req, res) {
  console.log("Hello World"); // ✅ logs each time the route is hit
  res.send("Hello World");    // ✅ sends the response
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Node.js listening on port " + PORT);
});

module.exports = app; // ✅ Required for FCC to test your app
































 module.exports = app;
