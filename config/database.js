import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log(err.message));
};
