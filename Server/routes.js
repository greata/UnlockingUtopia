module.exports = function(app, mongoose, cnn, logger){
    var spotInfo = require('./models/spot_info')(mongoose, cnn, logger);
    console.log(spotInfo);
    app.get('/spot/:title', function (req, res){
        logger.info('GET /spot/' + req.params.title);
        var title = req.params.title;
        //TODO
    });

  
    app.post('/spot_info', function (req, res){
    	console.log('start post');
        logger.info('POST /spot_info', req.body);
        var foundSpot = req.body;
        console.log('foundSpot', foundSpot);
        spotInfo.Model.addSpotLocation(foundSpot, res);
    });
    app.get('/find_spots', function (req, res){
        console.log('get', res);
        logger.info('GET /find_spots');
        spotInfo.Model.findSpotLocations(function(err, spot_locations){
            res.header('Cache-Control', 'max-age=1, public');
            res.send(spot_locations);
        });
    });
};










