var mongoose = require('mongoose'),
Artists = mongoose.model('Artists')

//CRUD methods
exports.artists = function(req, res) {
    Artists.find({}, function(err, artists) {
        if (err) {
            res.send(err);
        } else {
            res.json(artists);
        }
    });
};

exports.getSingleArtist = function(req, res) {
    var artistId = String(req.params.id);
    if (artistId.length === 24) {
        Artists.findById(mongoose.Types.ObjectId(artistId), function(err, artist) {
            if (err) {
                res.send("Artist not found");
            } else {
                res.json(artist);
            }
        });
    } else {
        res.send("Id is invalid");
    }
};

exports.add = function(req, res) {
    var newArtist = new Artists(req.body);
    newArtist.save(function(err, artist) {
        if (err) {
            res.send(err);
        } else {
            res.json(artist);
        }
    });
};

exports.update = function(req, res) {
    var artistId = String(req.params.id);    
    var id = mongoose.Types.ObjectId(artistId);
    Artists.findOneAndUpdate({ _id: id }, req.body, { new: true }, function(err, artist) {
        if (err) {
            res.send(err);
        }else{
            res.json(artist);
        }
    });
};

exports.delete = function(req, res) {
    var artistId = String(req.params.id);
    var id = mongoose.Types.ObjectId(artistId);
    Artists.remove({
        _id: id
    }, function(err, artist) {
        if (err) {
            res.send(err);
        }else{
            res.json({ message: 'artist successfully deleted' , _id: id});
        }
    });
};