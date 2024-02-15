const express = require("express");
const Services = require("../controllers/controller");

const router = express.Router();

router.route("/service").get(Services);

module.exports = router;
