const express = require("express");
const userCtrl = require("../controllers/user");
const verifyToken = require("../utils/verifyUser");

const router = express.Router();

router.get("/test", userCtrl.Test);
router.put("/update/:userId", verifyToken, userCtrl.updatedUser);
router.delete("/delete/:userId", verifyToken, userCtrl.deleteUser);
router.post("/signout", userCtrl.signout);
router.get("/allUserOfAdmin", verifyToken, userCtrl.getAllUserOfAdmin);
router.get("/getUser");
router.get("/AllUser", userCtrl.getAllUser);
router.get("/:userId", userCtrl.getUser);

module.exports = router;
