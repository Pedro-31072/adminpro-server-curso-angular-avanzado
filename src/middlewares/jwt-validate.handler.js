const jwt = require("jsonwebtoken");
const validateJWT = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "Token Error",
    });
  }
  try {
    const user = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.user = user;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token not Valid",
    });
  }
  next();
};
module.exports = {
  validateJWT,
};
