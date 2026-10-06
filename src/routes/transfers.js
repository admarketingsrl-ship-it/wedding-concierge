const { Router } = require("express");
const transfersController = require("../controllers/transfersController");

const router = Router();

router.get("/", transfersController.list);

module.exports = router;
