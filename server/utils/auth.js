const jwt = require('jsonwebtoken');

exports.generateJWT = payload => {
  const secret = Buffer.from(process.env.JWT_SECRET, 'base64');
  const options = { expiresIn: '6h' };

  return jwt.sign(payload, secret, options);
};
