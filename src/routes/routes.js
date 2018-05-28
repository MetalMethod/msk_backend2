var artistsController = require('./../controllers/artistsController');
var countriesController = require('./../controllers/countriesController');

var app;

module.exports = function (appFromServer) {
    app = appFromServer;

    //ARTISTS API endpoints
    app.get(
        '/artists',
        function (req, res) {
            artistsController.artists(req, res);
        }
    );

    app.get(
        '/artists/:id',
        function (req, res) {
            artistsController.getSingleArtist(req, res);
        }
    );

    app.post(
        '/artists',
        function (req, res) {
            artistsController.add(req, res);
        }
    );

    app.put(
        '/artists/:id',
        function (req, res) {
            artistsController.update(req, res);
        }
    );

    app.delete(
        '/artists/:id',
        function (req, res) {
            artistsController.delete(req, res);
        }
    );

    //GET COUNTRY LIST
    app.get(
        '/countries',
        function (req, res) {
            countriesController.getCountries(req, res);
        }
    );
}

