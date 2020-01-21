var express = require('express');
var router = express.Router();
var connection = require('../lib/db');


/* GET home page. */
router.get('/', function(req, res, next) {

    

    

        connection.query('SELECT * FROM personas', function (error, results, fields) {
            


            res.send(JSON.stringify(results));


            
        });





});


module.exports = router;
