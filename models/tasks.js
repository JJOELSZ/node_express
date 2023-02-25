const mongoose = require("mongoose");

const schemaTasks = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    done: { type: Boolean, default: false },
  },
  {
    timeStamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("tasks", schemaTasks);
