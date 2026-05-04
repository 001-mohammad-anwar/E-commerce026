import express from 'express';
import AddCategoryController from "../controller/category.controller.js"
const router = express.Router();

router.post("/addCategory", AddCategoryController);


export default router;