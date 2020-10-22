const hyperId = require('hyperid')

function authorization(req, res, next) {
    const authorization = req.headers.authorization
    if (authorization) {
        token = authorization.split(' ')[1]
        const isValidToken = hyperId.decode(token)
        console.log(isValidToken);
        if (isValidToken) {
            next()
        }
        else {
            res.status(401).send('Unauthorized')
        }
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorization