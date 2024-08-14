const { Router } = require("express");
const { userLogin } = require("../controllers/auth.controller");
const router = Router();
router.post("/", userLogin);
module.exports = router;
