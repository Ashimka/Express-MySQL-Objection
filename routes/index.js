const Router = require("express").Router;
const allUsersController = require("../controller/allUsersController");
const userController = require("../controller/userController");
const videoController = require("../controller/videoController");

const router = new Router();

router.get("/", allUsersController.getAllUsers);
router.get("/user/:id", userController.getUser);
router.get("/user/:id/video", videoController.getVideo);

module.exports = router;
