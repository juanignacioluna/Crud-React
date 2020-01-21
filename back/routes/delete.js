var express = require('express');
var router = express.Router();
var connection = require('../lib/db');


router.post('/', function(req, res, next) {

    connection.query('DELETE from personas where id = '+req.body.id+'', function (error, results, fields) {

        res.send(JSON.stringify(results));


    });


});


module.exports = router;