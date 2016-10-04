var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBcnouSbH2lFCORDzGsmmR-qwC7dfH94yQ'
});

module.exports = {
    
}

// getAddress : (req,res) => {
//     googleMapsClient.geocode({
//         address: '1600 Amphitheatre Parkway, Mountain View, CA'  //req.params, req.query, pass from form dynamically pass in address.
//     }, function(err, response) {
//         if (!err) {
//             console.log(response.json.results);
//             res.json(response.json.results);
//         }
//     });
// },
//
// getDirections : (req,res) => {
//     googleMapsClient.directions({
//         origin : req.query.origin,
//         destination : req.query.destination
//     }, function(err,response) {
//         console.log(response);
//         if (!err) {
//             res.json(response);
//         } else {
//             res.json(err);
//         }
//     })
// },
//
// getPlaces : (req,res) => {
//     googleMapsClient.placesAutoComplete({
//         input: req.query  //ng-keyup everyone, keydown settimeout then make the call , delayed autocomplete.
//     }, function(err,response) {
//         if (!err) {
//             console.log(response.json.results);
//             res.json(response.json.results);
//         }
//     });
// },
//
// getMatrix : (req,res) => {
//     googleMapsClient.distanceMatrix({
//
//     })
// }
//
