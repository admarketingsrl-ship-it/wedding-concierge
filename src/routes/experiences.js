const { Router } = require("express");
const experiencesController = require("../controllers/experiencesController");

const router = Router();

router.get("/", experiencesController.list);

module.exports = router;
