const { generateErrorResponse } = require("../helpers/generate-error-response");
const UserService = require("../services/user.service");

const service = new UserService();

const getAllUser = async (req, res) => {
  try {
    const users = await service.getAllUser();
    return res.status(200).json({
      ok: true,
      users,
    });
  } catch (error) {
    console.log(error);
    return generateErrorResponse(res);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, img, role } = req.body;
    let user = await service.findByEmail(email);
    if (user)
      return res.status(400).json({
        ok: false,
        msg: "The email is already being used",
      });
    user = await service.createUser({ name, email, password, img, role });
    return res.status(201).json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return generateErrorResponse(res);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    let user = await service.findById(id);
    if (!user)
      return res.status(404).json({
        ok: false,
        msg: "The user was not found",
      });
    const body = req.body;
    user = await service.updateUser(user, body);
    return res.status(200).json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return generateErrorResponse(res);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    let user = await service.deleteUser(id);
    if (!user)
      return res.status(404).json({
        ok: false,
        msg: "The user was not found",
      });
    return res.status(200).json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return generateErrorResponse(res);
  }
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
};
