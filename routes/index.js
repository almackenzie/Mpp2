var express = require('express');
var router = express.Router();

var rootPath = '/../public/html/LinearTemplate/';

/* GET home page. */
router.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname + rootPath });
});

module.exports = router;