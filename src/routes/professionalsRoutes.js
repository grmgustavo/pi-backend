import express from "express";
import ProfessionalsController from "../controllers/professionalsController.js";

const router = express.Router();

router
  .get("/professionals", ProfessionalsController.findAll)
  .get("/professionals/:id", ProfessionalsController.findById)
  .post("/professionals", ProfessionalsController.create)
  .put("/professionals/:id", ProfessionalsController.update)
  .delete("/professionals/:id", ProfessionalsController.remove);
export default router;
