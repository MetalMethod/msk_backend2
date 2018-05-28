//tool for generating keys
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

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
    app.use(checkJwt);

    // If we do not get the correct credentials, we’ll return an appropriate message
    app.use(function (err, req, res, next) {
        if (err) {
            if (err.name === 'UnauthorizedError') {
                res.status(401).json({ message: 'Missing or invalid token.' });
            } else {
                res.status(401).json({ error: err });
            }
        }
    });

    app.get('/authorized', function (req, res) {
        res.send('Secured Resource');
    });

    //return object to pass to the router
    return checkJwt;
}
