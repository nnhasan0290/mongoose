import mongoose from "mongoose";

const Mongo = new mongoose.model(
  "Mongo",
  mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  })
);

export default Mongo;
s;
