import app from "./src/app.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./src/swagger.json" assert { type: "json" };

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
