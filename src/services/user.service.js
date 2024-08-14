const User = require("../db/models/user.model");
const { generateEncryptedPassword } = require("../helpers");
//const Role = require("../db/models/Role");

class UserService {
  async getAllUser() {
    return await User.find({}, "name email img role");
  }
  async findByEmail(email) {
    return await User.findOne({ email });
  }
  async findById(_id) {
    return await User.findById(_id);
  }
  async updateUser(user, { name, email, password, img, role }) {
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      user.password = await generateEncryptedPassword(password);
    }
    if (img) user.img = img;
    if (role) user.role = role;
    await user.save();
    return {
      name: user.name,
      email: user.email,
      role: user.role,
      img: user.img,
      _id: user._id,
    };
  }
  /*   async findUserRole(role) {
    return await Role.find({ role });
  } */
  async createUser({ name, email, password, img, role }) {
    const user = await User.create({
      name,
      email,
      password: await generateEncryptedPassword(password),
      img,
      role,
    });

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      img: user.img,
      role: user.role,
    };
  }
  async deleteUser(_id) {
    const user = await User.findByIdAndDelete(_id);
    return {
      _id,
      name: user.name,
      email: user.email,
      img: user.img,
      role: user.role,
    };
  }
}
module.exports = UserService;
