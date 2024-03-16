const mongoose = require("mongoose");
const uri =
    "mongodb+srv://not_satpal_singh:sahilsagar@satpalcluster.tiwi9as.mongodb.net/Ben10db?retryWrites=true&w=majority&appName=satpalCluster";

mongoose
    .connect(uri)
    .then(() => console.log("Connected To The DB"))
    .catch((err) => console.log(err));
