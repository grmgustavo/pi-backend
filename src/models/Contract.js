import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  id: { type: String },
  professionalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "professionals",
    required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies",
    required: true,
  },
});

const contracts = mongoose.model("contracts", companySchema);

export default contracts;
