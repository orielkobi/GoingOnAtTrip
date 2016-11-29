module.exports = function (port, pathToApp) {

    var http = require('http');
    var express = require('express');
    var path = require('path');
    var app = express();
    const PORT = port;

    app.get('/', function (req, res) {
        res.sendFile(path.normalize(__dirname + "/../../APPS/" + pathToApp + "/index.html"));
    });

    app.use(express.static(path.normalize(__dirname + "/../../APPS/" + pathToApp)));

    app.listen(PORT);

};
