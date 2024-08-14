const generateErrorResponse = (res) => {
  return res.status(500).json({
    ok: false,
    msg: "Please contact the administrator",
  });
};
module.exports = {
  generateErrorResponse,
};
