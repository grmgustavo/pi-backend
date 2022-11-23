import jwt from "jsonwebtoken";
import env from "../config/.env.json" assert { type: "json" };

export default (req, res, next) => {
  const date = new Date();
  console.log("Middleware" + date);
  // todo: VALIDAÇÃO POR JWT
  next();
};
