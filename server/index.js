var http = require('http');
var express = require('express');
var restapi = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.sqlite');
var srv;
var port = 3000;

db.serialize(function() {
    db.run("DROP TABLE IF EXISTS events");
    db.run("CREATE TABLE events (id integer primary key autoincrement, title varchar(45), category varchar(45), participants integer(11), description varchar(45), date varchar(45), geolocation varchar(45))");
    db.run("INSERT INTO events (title, category, participants, description, date, geolocation) \
        values ('Paddeltour', 'Sport', 10, 'Eine nette Paddeltour', '19 Sep 2015','52.8401886, 10.0916719')");
    db.run("INSERT INTO events (title, category, participants, description, date, geolocation) \
        values ('Bogenschießen', 'Sport', 2, 'Pfeil und Bogen', '19 Sep 2015','52.835953, 10.089335')");
});

restapi.use(cors());
restapi.use(bodyParser.json());

restapi.options('*', cors()); // include before other routes

restapi.get('/api/capevents', function (req, res) {
    db.all("SELECT * FROM events", function(err, row) {
        res.json(row);
    });
});

restapi.get('/api/capevents/:id', function (req, res) {
    db.get("SELECT * FROM events where ID = ?", req.params.id, function(err, row) {
        res.json(row);
    });
});

restapi.post('/api/capevents', function (req, res) {
    db.run("INSERT INTO events (title, category, participants, description, date, geolocation) VALUES (?, ?, ?, ?, ?, ?)", 
        req.body.title, req.body.category, req.body.participants, req.body.description, req.body.date, req.body.geolocation, function(err, row) {
        if (err){
            console.log(err);
            res.status(500);
            res.end();
        }
        else {
            res.status(202);
            res.json(row || {});
        }
    });
});

restapi.put('/api/capevents/:id', function (req, res) {
    db.run("DELETE FROM events where ID = ?", req.params.id);
    db.run("INSERT INTO events (id, title, category, participants, description, date, geolocation) VALUES (?, ?, ?, ?, ?, ?, ?)", 
        req.params.id, req.body.title, req.body.category, req.body.participants, req.body.description, req.body.date, req.body.geolocation, function(err, row) {
        if (err) {
            console.log(err);
            res.status(500);
            res.end();
        }
        else {
            res.status(202);
            res.json(row || {});
        }
    }); 
});

restapi.delete('/api/capevents/:id', function (req, res) {
    db.run("DELETE FROM events where ID = ?", req.params.id, function(err, row) {
        res.json(row);
    });
});

module.exports = {
    restart: function(cb) {
        stop(function() {
            start();
        });
    },
    stop: function(cb) {
        if (srv) {
            srv.close(cb);
            console.log("Stopping server at http://localhost:" + port);
            srv = undefined;
        }
    },
    start: function() {
        srv = http.createServer(restapi).listen(port);
        console.log("Submit GET or POST to http://localhost:" + port + "/api/capevents");
    }
};
