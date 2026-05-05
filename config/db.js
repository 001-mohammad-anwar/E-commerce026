import mongoose from "mongoose";

export const connectDb = async () => {
  console.log("MONGO_URI:", process.env.ATLAS_MONGO_URI);
  mongoose
    .connect(process.env.ATLAS_MONGO_URI, {
      dbName: "MeeshowStore",
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("Database connection failed", err);
    });
};
