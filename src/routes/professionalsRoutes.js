import express from "express";
import ProfessionalController from "../controllers/professionalsController.js";

const router = express.Router();

router
  .get("/professionals", ProfessionalController.getProfessionals)
  .get("/professionals/:id", ProfessionalController.getProfessionalById)
  .post("/professionals", ProfessionalController.createProfessional)
  .put("/professionals/:id", ProfessionalController.updateProfessional)
  .delete("/professionals/:id", ProfessionalController.deleteProfessional);
export default router;
