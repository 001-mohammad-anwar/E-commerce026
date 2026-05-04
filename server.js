import {config} from 'dotenv';
config();
import app from "./app.js"
import { connectDb } from './config/db.js';
connectDb();

const PORT = process.env.PORT
const server = app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
})