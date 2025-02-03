import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});
export const Todo=mongoose.model("todo",todoSchema);