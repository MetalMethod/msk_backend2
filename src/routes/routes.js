var artistsController = require('./../controllers/artistsController');
var countriesController = require('./../controllers/countriesController');

var app, checkJwt;

module.exports = function (appFromServer, jwt) {
    app = appFromServer;
    checkJwt = jwt

    //ARTISTS API endpoints with auth0 jwt
    app.get(
        '/api/artists',
        //checkJwt,
        function (req, res) {
            artistsController.artists(req, res);
        }
    );

    app.get(
        '/api/artists/:id',
        //checkJwt,
        function (req, res) {
            artistsController.getSingleArtist(req, res);
        }
    );

    app.post(
        '/api/artists',
       // checkJwt,
        function (req, res) {
            artistsController.add(req, res);
        }
    );

    app.put(
        '/api/artists/:id',
        //checkJwt,
        function (req, res) {
            artistsController.update(req, res);
        }
    );

    app.delete(
        '/api/artists/:id',
        //checkJwt,
        function (req, res) {
            artistsController.delete(req, res);
        }
    );

    //GET COUNTRY LIST - no auth required
    app.get(
        '/api/countries',
        function (req, res) {
            countriesController.getCountries(req, res);
        }
    );
}

