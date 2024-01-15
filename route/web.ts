import express, { Express } from "express";
const router = express.Router();
import * as test from "../controller/testController";

const usercontrol = require("../controller/userController");

router.get("/user", usercontrol.index);
router.post("/user", usercontrol.store);
router.get("/user/:id", usercontrol.find);
router.put("/user/:id", usercontrol.update);
router.delete("/user/:id", usercontrol.destroy);

router.post("/test", test.fileupload);

module.exports = router;
