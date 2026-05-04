import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String, // example: "checkroom"
    required: true,
  },
  category: {
    type: String, // example: "Fashion"
    required: true,
  }
}, {
  timestamps: true
});

export default mongoose.model("Category", categorySchema);
