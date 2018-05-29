var mongoose = require('mongoose'),
Countries = mongoose.model('Countries')
var logger = require('./../middleware/logger');


//GET ALL
exports.getCountries = function(req, res) {
    Countries.find({}, function(err, countries) {
        if (err) {
            res.json({message: 'error in request'});
            logger.error('Countries request error. Original Request:', req.body, ' Original URL: ', req.originalUrl);            
        } else {
            res.json(countries);
        }
    });
};
