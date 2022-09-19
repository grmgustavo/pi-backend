import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
});

const clients = mongoose.model("clients", clientSchema);

export default clients;