const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/cool", function (req, res, next) {
  res.send("you are so cool");
});
router.get("/cool/beach", function (req, res, next) {
  res.send("beach is so cool");
});
router.get("/ifc", function (req, res, next) {
  res.send("bem-vindo ao IFC");
});
module.exports = router;
