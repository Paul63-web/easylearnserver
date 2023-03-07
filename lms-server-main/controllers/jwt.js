const jwt = require('jsonwebtoken');

const generateJwt = userInfo => {
    let userJwt = jwt.sign({
        id: userInfo._id,
        email: userInfo.email
    }, process.env.KEY, { expiresIn: '10h', issuer: 'www.easylearning.com' });

    return userJwt;
}

module.exports = { generateJwt }