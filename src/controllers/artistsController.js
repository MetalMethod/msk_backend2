var mongoose = require('mongoose'),
    Artists = mongoose.model('Artists')

//CRUD methods

//GET ALL
exports.artists = function (req, res) {
    Artists.find({}, function (err, artists) {
        if (err) {
            res.send(err);
        } else {
            res.json(artists);
        }
    });
};

//GET SINGLE BY ID
exports.getSingleArtist = function (req, res) {
    var artistId = String(req.params.id);
    if (artistId.length === 24) {
        Artists.findById(mongoose.Types.ObjectId(artistId), function (err, artist) {
            if (err) {
                res.send("Artist not found");
            } else {
                res.json(artist);
            }
        });
    } else {
        res.send("request Id is invalid. \nid received: " + artistId);
    }
};

//CREATE
exports.add = function (req, res) {
    var newArtist = new Artists(req.body);
    newArtist.save(function (err, artist) {
        if (err) {
            res.send(err);
        } else {
            res.json(artist);
        }
    });
};

//UPDATE
exports.update = function (req, res) {
    var artistId = String(req.params.id);
    if (artistId.length === 24) {
        var id = mongoose.Types.ObjectId(artistId);
        Artists.findOneAndUpdate({ _id: id }, req.body, { new: true }, function (err, artist) {
            if (err) {
                res.send(err);
            } else {
                res.json(artist);
            }
        });
    } else {
        res.send("request Id is invalid. \nid received: " + artistId);
    }
};

//DELETE
exports.delete = function (req, res) {
    var artistId = String(req.params.id);
    if (artistId.length === 24) {
        var id = mongoose.Types.ObjectId(artistId);
        Artists.remove({
            _id: id
        }, function (err, artist) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'artist successfully deleted', _id: id });
            }
        });
    } else {
        res.send("request Id is invalid. \nid received: " + artistId);
    }
};