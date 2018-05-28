var mongoose = require('mongoose'),
Countries = mongoose.model('Countries')

//GET ALL
exports.getCountries = function(req, res) {
    Countries.find({}, function(err, countries) {
        if (err) {
            res.send(err);
        } else {
            res.json(countries);
        }
    });
};
