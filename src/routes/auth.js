const express = require("express");
const authCtrl = require("../controllers/auth");

const router = express.Router();

router.post("/signup", authCtrl.signup);
router.post("/signin", authCtrl.signin);
router.post("/google", authCtrl.google);

module.exports = router;
