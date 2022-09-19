import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/body-shore");

const db = mongoose.connection;

export default db;
