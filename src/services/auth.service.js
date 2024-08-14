const User = require("../db/models/user.model");
const { compareEncryptedPassword } = require("../helpers");
class AuthService {
  async findByEmail(email) {
    return await User.findOne({ email });
  }
  async login(email, password) {
    const user = await this.findByEmail(email);
    if (!user) return null;
    const comparisonResult = await compareEncryptedPassword(
      password,
      user.password
    );

    if (!comparisonResult) return null;

    return {
      _id: user._id,
      name: user.name,
      email,
      role: user.role,
    };
  }
}
module.exports = AuthService;
