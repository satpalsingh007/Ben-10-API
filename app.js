const express = require("express");
const app = express();
const routes = require("./routes/route");
require("./db/db");
app.use("/aliens", routes);
// require("./db/data");
app.use(express.static("static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
