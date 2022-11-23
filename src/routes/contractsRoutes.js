import express from "express";
import ContractsController from "../controllers/contractsController.js";

const router = express.Router();

router
  .get("/contracts", ContractsController.findAll)
  .get("/contracts/professional/:id", ContractsController.findByProfessionalId)
  .get("/contracts/company/:id", ContractsController.findByCompanyId)
  .post("/contracts/", ContractsController.create)
  .delete("/contracts/:id", ContractsController.remove);

export default router;
