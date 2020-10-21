const hyperId = require('hyperid')

function authorization(req, res, next) {
    // ** Bearer SGLt35GpRsyochKuWU2SIg/0
    const authorization = req.headers.authorization
    const token = authorization.split(' ')[1]
    const isValidToken = hyperId.decode(token)
    console.log(isValidToken);
    if (isValidToken) {
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorization