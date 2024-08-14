const AuthService = require("../services/auth.service");
const { generateErrorResponse, generateJWT } = require("../helpers");
const service = new AuthService();

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await service.login(email, password);
    if (!user)
      return res.status(400).json({
        ok: false,
        msg: "Invalid credentials",
      });
    const token = await generateJWT(user);
    return res.status(200).json({
      ok: true,
      msg: "The authentication process has been completed successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return generateErrorResponse(res);
  }
};

module.exports = {
  userLogin,
};
