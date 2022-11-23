import app from "./src/app.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./src/swagger.json" assert { type: "json" };
import env from "./src/config/.env.json" assert { type: "json" };

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = env.port;
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
