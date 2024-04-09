const express = require("express");

const router = express.Router();

router.get("/test");
router.put("/update/:userId");
router.delete("/delete/:userId");
router.post("/signout");
router.get("/getusers");
router.get("/:userId");

module.exports = router;
