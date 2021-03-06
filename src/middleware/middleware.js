//tool for generating keys
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var logger = require('./logger');

module.exports = function (app) {

    const jwt = require('express-jwt');
    const jwtAuthz = require('express-jwt-authz');
    const jwksRsa = require('jwks-rsa');

    // Authentication middleware. When used, the
    // Access Token must exist and be verified against
    // the Auth0 JSON Web Key Set
    const checkJwt = jwt({
        // Dynamically provide a signing key
        // based on the kid in the header and 
        // the signing keys provided by the JWKS endpoint.
        secret: jwksRsa.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: `https://metalmethod.eu.auth0.com/.well-known/jwks.json`
        }),

        // Validate the audience and the issuer.
        audience: 'msk_api_identifier',
        issuer: `https://metalmethod.eu.auth0.com/`,
        algorithms: ['RS256']
    });

    //check for tokens is every request to the api
    //app.use(checkJwt);

    // If we do not get the correct credentials, we’ll return an appropriate message
    app.use(function (err, req, res, next) {
        if (err) {
            if (err.name === 'UnauthorizedError') {
                logger.error('Missing or invalid token. Error name:', err.name, 'Request URL:', req.originalUrl, 'request method:', req.method)

                res.status(401).json({ message: 'Missing or invalid token.' });

            } else {

                res.status(401).json({ message: 'Successful request:', requestUrl: req.originalUrl });
            }
        }
    });

    app.get('/authorized', function (req, res) {
        res.send('Secured Resource');
    });

    // CORS Header
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    //return object to pass to the router
    return checkJwt;
}
