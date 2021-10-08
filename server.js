const express = require('express');
const app = express();
const ip = "192.168.1.40"
// const ip = "10.0.0.212"
const port = 3000;

app.use(express.static('public'));

app.get('/info', function(req, res) {
    res.json({
        version: "1.0.0",
        versionCode: 1,
        downloadLink: "http://" + ip + ":" + port + "/download",
        venueName: "LiveBarn Office - Montreal",
        id: "yeojong",
        pwd: "live1234",
        host: "192.168.1.19",
        prefix: "/live%d.sdp",
        indices: [2, 3]
    });
});

app.get('/download', function(req, res) {
    const file = './public/dest/livebarn-venuetv-release-1.0.0-2.apk';
    res.download(file);
})

var server = app.listen(port, ip, function() {
    var port = server.address().port;
    console.log("Server started at http://%s:%d", ip, port);
});