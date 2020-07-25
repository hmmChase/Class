exports.generateJWT = payload => {
  const secret = Buffer.from(process.env.JWT_SECRET, 'base64');
  const expiration = '6h';

  return jwt.sign({ payload }, secret, { expiresIn: expiration });
};
