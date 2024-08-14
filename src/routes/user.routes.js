const { Router } = require("express");
const { body, param } = require("express-validator");

const { getAllUser, createUser, updateUser, deleteUser } = require("../controllers/user.controller");
const { handleMiddlewareErrors, validateJWT } = require("../middlewares");
const router = Router();

router.get("/", getAllUser);
router.post(
  "/",
  [
    body("name", "User's name is required").notEmpty(),
    body("email", "User's email is required").notEmpty(),
    body("email", "User's email is required").isEmail(),
    body("password", "The email is not valid").notEmpty(),
    body("password", "The minimum password length is 6").isLength({ min: 6 }),
    body("role", "User role is required").notEmpty(),
    body("role", "The role must be either ADMIN_ROLE or USER_ROLE.").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    handleMiddlewareErrors,
    validateJWT,
  ],
  createUser
);
router.put(
  "/:id",
  [
    param("id", "The id is not valid").isMongoId(),
    body("password", "The minimum password length is 6").optional({ checkFalsy: true }).isLength({ min: 6 }),
    body("role", "The role must be either ADMIN_ROLE or USER_ROLE").optional({ checkFalsy: true }).isIn(["ADMIN_ROLE", "USER_ROLE"]),
    handleMiddlewareErrors,
    validateJWT,
  ],
  updateUser
);
router.delete(
  "/:id",
  [
    param("id", "The id is not valid").isMongoId(),
    handleMiddlewareErrors,
    validateJWT,
  ],
  deleteUser
);
module.exports = router;
