import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import AddCategoryrouter from "./router/category.router.js"
import venderRouter from "./router/vender.router.js"
import smartlygetCategory from "./router/getSmartCategory.js"
const app = express();
app.use(cors({
   origin : [process.env.FRONTEND_URL],
   methods : ["GET" , "POST" , "PUT" , "DELETE"],
   credentials : true
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({credentials: true}));

app.use("/api/AddCategory" , AddCategoryrouter)
app.use("/api/vender" , venderRouter)
app.use("/api/getCategorySmart" , smartlygetCategory)




export default app ;
