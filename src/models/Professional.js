import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  skill: { type: String, required: true },
});

const professionals = mongoose.model("professionals", professionalSchema);

export default professionals;
