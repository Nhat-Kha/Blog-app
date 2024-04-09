const express = require("express");

const router = express.Router();

router.post("/signup");
router.post("/signin");
router.post("/google");

module.exports = router;
