const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nam field cannot be empty"],
      trim: true,
      minlength: [2, "More than one character is needed."],
      maxlength: [20, "Cannot be more than 20 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
