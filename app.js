const express = require("express");
const path = require('path');
const app = express();
app.engine('html', require('ejs').renderFile);

port = process.env.PORT || 3000;
ip = process.env.IP || "localhost";

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	res.render("index.html");
});

app.get('/mercury', function(req, res) {
	res.render("mercury.html");
})

app.get('/venus', function(req, res) {
	res.render("venus.html");
})

app.get('/earth', function(req, res) {
	res.render("earth.html");
})

app.get('/mars', function(req, res) {
	res.render("mars.html");
})

app.get('/jupiter', function(req, res) {
	res.render("jupiter.html");
})

app.get('/saturn', function(req, res) {
	res.render("saturn.html");
})

app.get('/uranus', function(req, res) {
	res.render("uranus.html");
})

app.get('/neptune', function(req, res) {
	res.render("neptune.html");
})

app.get('/pluto', function(req, res) {
	res.render("pluto.html");
})

app.listen(port, ip, function() {
	console.log("Server is running on 'http://localhost:%d/'.", port);
});