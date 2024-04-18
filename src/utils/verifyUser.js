const jwt = require("jsonwebtoken");
const errorHandler = require("./error");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(errorHandler(401, "Unauthorized"));
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};

// const verifyAccessTokenIO = (token) => {
//   if (!token) return createError.Unauthorized();

//   return jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
//     if (err) {
//       const message =
//         err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
//       return createError.Unauthorized(message);
//     }
//     return payload;
//   });
// };

module.exports = verifyToken;
