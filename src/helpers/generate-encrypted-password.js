const bcryptjs = require("bcryptjs");

const generateEncryptedPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcryptjs.genSalt(Number(process.env.SALT_ROUNDS), (err, salt) => {
      if (err) reject(err);
      bcryptjs.hash(password, salt, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
};
module.exports = {
  generateEncryptedPassword,
};
