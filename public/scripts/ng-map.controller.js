angular.module('NavApp')
    .controller('NavController', NavCtrl);

function NavCtrl(NgMap) {
    console.log('Navctrl:loaded!', NavCtrl)
    var nav = this;
    window.nav = nav;
    nav.showInput = false;
    nav.wayPoint = [];
    nav.showPlace = false;


    nav.placeChanged = function() {
        nav.AutoComplete = this;  //only available at a certain time so store for later use.

    }
    // create an array to put inputs from ,whenever we change the place, then add that ot the autocomplete.
    nav.addNewInput = function() {
        nav.showPlace = true;
    }
    nav.addPoint = function() {
        nav.place = nav.AutoComplete.getPlace()
        nav.wayPoint.push({
            location :{
                lat: nav.place.geometry.location.lat(),
                lng: nav.place.geometry.location.lng()
            },
                stopover :true
        })
        console.log('location', nav.place.geometry.location)
        console.log(nav.wayPoint);
    }

    // GeoCoder.geocode({address: nav.wayPoint}).then(function(result) {
    //     nav.geocode = response.data;
    // });

    // lat : nav.lat,
    // lng : nav.lng,
    // stopover: true

    // nav.showPoint = true;
    // nav.lat = '';
    // nav.lng = '';

    nav.origin = '';
    nav.destination = '';
    nav.startFinish = [];

  //   nav.placeChanged = function() {
  //       nav.place = this.getPlace();
  //       console.log('location', nav.place.geometry.location);
  //       nav.map.setCenter(nav.place.geometry.location);
  // }

    nav.submitAddress = function() {
        nav.origin = nav.originInput;
        nav.destination = nav.destinationInput
        nav.startFinish.push({
            origin: nav.originInput,
            destination: nav.destinationInput
        });
        console.log(nav.map.directions);
        console.log(nav.startFinish);
    }

  // function that returns ngMap \\
    NgMap.getMap().then(function(map) {
        console.log('ngMap loaded!', map);
        nav.map = map;
        console.log(nav.map.getCenter());
        console.log('markers', nav.map.markers);
        console.log('shapes', nav.map.shapes);
        console.log(nav.map.directions);
    });
} /* end NavCtrl */


/*convert date stamp into milliseconds

var date = new Date ()
date.getTime()

 12hrs*60 * 60sec * 1000 mill

30 * 60 * 1000

date.getTime() + 45000000 */
