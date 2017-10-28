const expressjwt = require('express-jwt');

module.exports = expressjwt({
    secret: 'mysecretolargo',
    getToken: function(req) {
        if (req.headers && req.headers['x-access-token']) {
            return req.headers['x-access-token'];
        } else {
            return null;
        }
    }
});