import jwt from 'express-jwt';

export const isAuth = jwt({
  secret: Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64'),
  // userProperty: 'jwt', // the encoded data now shows up in req.jwt
  // requestProperty: 'user',
  getToken: req => req.cookies.jwt,
  // audience: 'http://myapi/protected',
  // issuer: 'http://issuer',
  algorithms: ['HS256']

  // getToken: function fromHeaderOrQuerystring(req) {
  //   if (
  //     req.headers.authorization &&
  //     req.headers.authorization.split(' ')[0] === 'Bearer'
  //   ) {
  //     return req.headers.authorization.split(' ')[1];
  //   } else if (req.query && req.query.token) {
  //     return req.query.token;
  //   }
  //   return null;
  // }
});

// can also do it manually
// app.get('/test', function (req, res) {
//   var loginToken =
//     req.headers.authentication || req.body.userToken || req.headers.Bearer;

//   jsonwebtoken.verify(
//     loginToken,

//     new Buffer(process.env.ACCESS_TOKEN_SECRET, 'base64'),

//     (err, decoded) => {
//       if (err) return res.status(401).send({ message: 'invalid_token' });

//       // be aware of encoded data structure
//       // simply console.log(decoded) to see what it contains
//       res.send(decoded); //`decoded.foo` has your value
//     }
//   );
// });
