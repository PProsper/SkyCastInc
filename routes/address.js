var express = require('express');
var router = express.Router();
var request = require('axios');
var yargs = require('yargs');

router.post('/', (req, res, next) => {
  const url = 'http://sdkfjdkj.com?address&api_key=sjhfjsdjfh';
  request.get(url)
         .then(coordinateData => {
           request.get(urlwithcoordit)
                  .then(data => {
                    res.render(weather, {
                      weahter: weather,
                    })
                  })
         })
});

module.exports = router;
