const express = require("express");

const router = express.Router();

router.post("/create");
router.get("/getPostComments/:postId");
router.put("/likeComment/:commentId");
router.put("/editComment/:commentId");
router.delete("/deleteComment/:commentId");
router.get("/getcomments");

module.exports = router;
