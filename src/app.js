import express from "express";
import db from "./config/dbConnect.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco de dados feita com sucesso");
});

const app = express();
app.use(authMiddleware);
routes(app);

export default app;
