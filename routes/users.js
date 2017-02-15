var express = require('express');
var router = express.Router();
var request = require('request');
var yargs = require('yargs');

const authHelpers = require('../auth/auth-helpers');

/* GET user profile page. */
// add route here
router.get('/', authHelpers.loginRequired, (req, res, next) => {

  res.render('users/index', {
    user: req.user.dataValues
  });
});

var argu = yargs.options({
  address: {
    demand: true,
    locatation: 'address',
    string: true
  }
}).argu;

console.log(argu);



// router.get('/', function(req, res, next) {
  // request({
  //   // url: `http://maps.googleapis.com/maps/api/geocode/json?address=${addinput.vaule}key=AIzaSyBoFRL_vQEpDVdJ6I1YDvCqs8RrTUEXnYI&callback=initMap`,
  //   url: `http://maps.googleapis.com/maps/api/geocode/json?address=${addinput.vaule}&key=AIzaSyBoFRL_vQEpDVdJ6I1YDvCqs8RrTUEXnYI`,
  //   json: true
  // }, (err, res, body) =>{
  //   if(error){
  //     console.log('unable to connect');
  //   } else if (body.status === 'ZERO_RESULTS'){
  //     console.log('unable to find that address');
  //   } else if (body.status === 'OK') {
  //     address:('Address: ${body.results[0].formated.address}');
  //     lattitude:('Latitude: ${body.results[0].formated.lat}');
  //     longitude:('Longitude: ${body.results[0].formated.lng}');
  //   }
  // }).then(function(res){
  //   findLocation();
  //   return res;
// });

// router.post('/', function(req, res, next) {
//   request({
//     lattitude,
//     longitude,
//     url: 'https://api.darksky.net/forecast/',
//     data:{
//       key: '76e701772bd0cbf0957ca5de9088e68c',
//     }
// }).then(function(response){
//     return res;
// })
// })
// });
module.exports = router;
