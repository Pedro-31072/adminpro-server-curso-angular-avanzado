const bcryptjs = require("bcryptjs");

const compareEncryptedPassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcryptjs.compare(password, hash, function (err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
};
module.exports = {
  compareEncryptedPassword,
  };
  