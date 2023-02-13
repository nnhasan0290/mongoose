import mongoose from "mongoose";
const mongoSchema = new mongoose.Schema({
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
});

const Mongo = new mongoose.model("Mongo", mongoSchema);

export default Mongo;
