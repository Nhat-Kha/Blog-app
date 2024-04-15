const express = require("express");
const postCtrl = require("../controllers/post");
const verifyToken = require("../utils/verifyUser");

const router = express.Router();

router.post("/create", verifyToken, postCtrl.create);
router.get("/getposts", postCtrl.getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, postCtrl.deletepost);
router.put("/updatepost/:postId/:userId", verifyToken, postCtrl.updatepost);

module.exports = router;
