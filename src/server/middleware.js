//tool for generating keys
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var rsaValidation = require('auth0-api-jwt-rsa-validation');



//middleware  for web tokens
exports.jwtCheck =  jwt({
        secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksreqsPerMinute: 5,
            jwksUri: "https://metalmethod.eu.auth0.com/.well-known/jwks.json"
        }),
        audience: 'msk_api_identifier',
        issuer: "https://metalmethod.eu.auth0.com/",
        algorithms: ['RS256']
    });

   
exports.guard = function (req, res, next) {
    // we’ll use a case switch statement on the route requested
    switch (req.path) {
        // if the request is for artists we’ll check to see if the token has general scope
        case '/artists': {
            var permissions = ['general'];
            for (var i = 0; i < permissions.length; i++) {
                if (req.user.scope.includes(permissions[i])) {
                    next();
                } else {
                    res.send(403, { message: 'Forbidden' });
                }
            }
            break;
        }
        // Same for the reviewers
        case '/reviewers': {
            var permissions = ['general'];
            for (var i = 0; i < permissions.length; i++) {
                if (req.user.scope.includes(permissions[i])) {
                    next();
                } else {
                    res.send(403, { message: 'Forbidden' });
                }
            }
            break;
        }
        // Same for publications
        case '/publications': {
            var permissions = ['general'];
            for (var i = 0; i < permissions.length; i++) {
                if (req.user.scope.includes(permissions[i])) {
                    next();
                } else {
                    res.send(403, { message: 'Forbidden' });
                }
            }
            break;
        }
        // For the pending route, we’ll check to make sure the token has the scope of admin before returning the results.
        case '/pending': {
            var permissions = ['admin'];
            console.log(req.user.scope);
            for (var i = 0; i < permissions.length; i++) {
                if (req.user.scope.includes(permissions[i])) {
                    next();
                } else {
                    res.send(403, { message: 'Forbidden' });
                }
            }
            break;
        }
    }
}

