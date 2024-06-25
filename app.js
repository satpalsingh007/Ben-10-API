const express = require("express");
const app = express();
const routes = require("./routes/route");
const PORT = process.env.PORT || 3000;
require("./db/db");
app.use("/aliens", routes);
// require("./db/data");
app.use(express.static("static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
});

app.listen(PORT, () => {
    console.log("server is running on port 3000");
});
