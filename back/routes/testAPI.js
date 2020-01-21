var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("<title>CRUD MOON. Back.</title>BACKEND is working properly");
});

module.exports = router;