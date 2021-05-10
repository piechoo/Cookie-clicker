const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller");

router.post("/cookie", controller.receiveCookieState);
router.post("/user", controller.receiveUserState);
router.get("/getuser", controller.sendUserState);
router.get("/getcookie", controller.sendCookieState);

module.exports = router;
