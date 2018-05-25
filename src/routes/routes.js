var artistsController = require('./../controllers/artistsController');

var app;

module.exports = function (appFromServer) {
    app = appFromServer;

    // implementation of artists API endpoints
    app.get(
        '/artists',
        function (req, res) {
            // get list of artists
            // Send the res as a JSON array
            artistsController.artists(req, res);
        }
    );

    app.get(
        '/artists/:id',
        function (req, res) {
            artistsController.getSingleArtist(req, res);
        }
    );


}

