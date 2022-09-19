import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  clientId: { type: String, required: true },
  occupation: { type: String },
});

const companies = mongoose.model("companies", companySchema);

export default professionals;
