import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  clientId: { type: String },
  occupation: { type: String },
});

const companies = mongoose.model("companies", companySchema);

export default professionals;
