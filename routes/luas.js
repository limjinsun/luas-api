var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
var tabletojson = require('tabletojson');

/* GET home page. */

router.get('/', function (req, res, next) {
    res.json('Luas Api')
})

router.get('/:id', function (req, res, next) {
    // console.log('Request Id:', req.params.id);
    const url = "http://luasforecasts.rpa.ie/analysis/view.aspx?id=" + req.params.id
    fetch(url).then((result) => result.text()).then((html) => {

        // 'data' is whole html strings. I wanted to extract '<table> part' from HTML strings.
        /**
         *  this wasn't working. 
         * 
         *  var elements = $(data);
         *  var found = elements.find('table');    
         * 
         *  
         *  this wasn't woking either.
         * 
         *  var span = document.createElement('span');
         *  span.innerHTML= data;
         *  data = span.getElementsByTagName('table')
         * 
         */

        // then I found this. -> https://www.npmjs.com/package/tabletojson

        var converted = tabletojson.convert(html);
        var jsonDatas = []

        if (converted.length > 0) {
            jsonDatas = converted[0].map((element) => {
                var data = {}
                data.Direction = element.Direction;
                data.Destination = element.Destination;
                data.DueTime = element.Time;
                return data;
            })
        }

        res.json(jsonDatas);

        console.log(JSON.stringify(jsonDatas, null, 4));
    }).catch((e) => console.log(e))
})

module.exports = router;