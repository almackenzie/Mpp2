var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/presentation', function (req, res) {
    res.sendFile('MppPresentation.html');
});

module.exports = router;