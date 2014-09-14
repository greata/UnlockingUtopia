// changing this breaks existing installations. On change update
// the installation guide.
var COLLECTION_NAME = 'spot_info';
module.exports = function(mongoose, connection, logger){
    var schema = new mongoose.Schema({
          
    		title: { type: String, required: true},
        	latitude: { type: Number, required: true},
        	longitude: { type: Number, required: true},
        	description: { type: String, required: false},
        	uploadDate: { type: Date, required: true},
            user:[ { 
            	name: { type: String, required: false}, 
            	email: { type: String, required: false} 
            }],
            status: { type: String, required: false }
        
    }, { collection : COLLECTION_NAME } );
    
    
    schema.statics.addSpotLocation = function(foundSpot, res){
        var spotModel = new Model(foundSpot);
        if (!spotModel.title || !spotModel.description){
            logger.error('Post without title or description.');
            res.send(404, 'Post without title or description.');
            return;
        }
        spotModel.uploadDate = Date.now();
        spotModel.save(function(err){
            if (err) {
                logger.error(err);
                res.send(404, err.message);
            }
            res.send(200);
        });
        
    };

    // function callback(err, spotInfo)
    schema.statics.findSpotLocations = function(callback){
        Model.find({}).exec(callback);
    };

    var Model = connection.model(COLLECTION_NAME, schema);
    return {
        "Model": Model,
        modelName: COLLECTION_NAME
    }
};