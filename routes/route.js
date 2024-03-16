const express = require("express");
const router = express.Router();
const { getAllData, getSingleData } = require("../controller/controller");
router.route("/name/all").get(getAllData);
router.route("/name/:name").get(getSingleData);
module.exports = router;
