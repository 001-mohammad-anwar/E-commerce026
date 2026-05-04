import express from "express";
const router = express.Router();
import createVender from "../controller/vender.controller.js"
// const authMiddleware = require("../Moddleware/auth-middleware");
// const upload = require("../Moddleware/multer-middleware");

router.route("/createvender").post(createVender)

export default router;