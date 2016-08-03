var express = require('express');
var router = express.Router();

/* GET presentation */
router.get('/', function (req, res) {
    res.sendFile('MppPresentation.html', { root: __dirname + '/../' });
});

module.exports = router;