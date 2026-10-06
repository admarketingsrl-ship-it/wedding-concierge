const { Router } = require("express");
const guestsController = require("../controllers/guestsController");

const router = Router();

router.get("/", guestsController.list);

module.exports = router;
