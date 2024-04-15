const express = require("express");
const commentCtrl = require("../controllers/comment");
const verifyToken = require("../utils/verifyUser");

const router = express.Router();

router.post("/create", verifyToken, commentCtrl.createComment);
router.get("/getPostComments/:postId", commentCtrl.getPostComments);
router.put("/likeComment/:commentId", verifyToken, commentCtrl.likeComment);
router.put("/editComment/:commentId", verifyToken, commentCtrl.editComment);
router.delete(
  "/deleteComment/:commentId",
  verifyToken,
  commentCtrl.deleteComment
);
router.get("/getcomments", verifyToken, commentCtrl.getcomments);

module.exports = router;
