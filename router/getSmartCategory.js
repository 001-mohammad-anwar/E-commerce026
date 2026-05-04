import express from "express"
const router = express.Router();

import getCategoriesSmart from "../controller/fetchAllCategorybyVendor.js"

// 🔥 POST (kyunki body me lat/lng aa raha hai)
router.post("/getCategorysmart", getCategoriesSmart);

export default router