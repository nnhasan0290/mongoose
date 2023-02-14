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

mongoSchema.methods.valueConsole = function (cb) {
  console.log("this method is calling during mutation only");
};
mongoSchema.statics.staticExample = function () {
  console.log("this static function can be called from everywhere");
};

const Mongo = new mongoose.model("Mongo", mongoSchema);

export default Mongo;
