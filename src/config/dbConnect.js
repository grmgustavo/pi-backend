import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:rGrDjp9I9uNmFbH7@cluster0.ejfsbhj.mongodb.net/body-shore-api"
);

const db = mongoose.connection;

export default db;
