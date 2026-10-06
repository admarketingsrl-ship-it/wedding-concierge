const { Router } = require("express");
const hotelsController = require("../controllers/hotelsController");

const router = Router();

router.get("/", hotelsController.list);

module.exports = router;
