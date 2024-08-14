const { Router } = require("express");
const { searchAll } = require("../controllers/search.controller");
const router = Router();
router.get("/all/:search",searchAll);
router.get("/collection/:table/:search");

module.exports = router;
