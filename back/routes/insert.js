var express = require('express');
var router = express.Router();
var connection = require('../lib/db');


router.post('/', function(req, res, next) {


    connection.query("insert into personas(nombre,apellido,edad) values('" + req.body.nombre + "','"+req.body.apellido+"','"+req.body.edad+"')", function (error, results, fields) {
        
        res.send(JSON.stringify(results));


    });


});


module.exports = router;