const jwt = require("jsonwebtoken");
const generateJWT = (user) => {
  const payload = user;
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "24h",
      },
      (error, token) => {
        if (error) {
          reject(error);
        }
        resolve(token);
      }
    );
  });
};

module.exports = {
  generateJWT
}