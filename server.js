require('colors');

var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    PORT = process.env.PORT || 1337,
    routes = require('./routes/routes.controller.js'),
    app = express();
    // leaflet = require('angular-leaflet-directive'),
    // mapbox = require('mapbox-directions.js'),
    // directive = require('angular-mapboxgl-directive'),

// var MapboxClient = require('mapbox'),
//     client = new MapboxClient('sk.eyJ1Ijoiamtlc3Q2MTgiLCJhIjoiY2l0dDVraGFzMDAwNTJvbjJvbHRobjJ2MSJ9.repNBbpi81nytP3Pqt7OTA'),
//     directions = require('mapbox/lib/services/directions');



app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


routes(app);

app.listen(PORT, function(err) {
    if(err) {
        console.log("Server Error!" .cyan, err);
        process.exit(1);
    } else {
        console.log("Server is up!" .green);
    }
});
