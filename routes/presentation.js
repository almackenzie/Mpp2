var express = require('express');
var router = express.Router();

var presentationRootPath = '/../public/html/presentations/';

/* GET presentation */
router.get('/', function (req, res) {
    res.sendFile('MppPresentation.html', { root: __dirname + presentationRootPath });
});

router.get('/demo', function (req, res) {
    res.sendFile('DemoPresentation.html', { root: __dirname + presentationRootPath });
});

module.exports = router;