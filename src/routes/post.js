const express = require("express");

const router = express.Router();

router.post("/create");
router.get("/getposts");
router.delete("/deletepost/:postId/:userId");
router.put("/updatepost/:postId/:userId");

module.exports = router;
