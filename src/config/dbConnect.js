import mongoose from "mongoose";
import env from "./.env.json" assert { type: "json" };

mongoose.connect(env.url);

const db = mongoose.connection;

export default db;
