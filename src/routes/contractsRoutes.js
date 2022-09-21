import express from "express";
import ContractController from "../controllers/contractsController.js";

const router = express.Router();

router
  .get("/contracts", ContractController.getAllContracts)
  .get(
    "/contracts/professional/:id",
    ContractController.getContractByProfessionalId
  )
  .get("/contracts/company/:id", ContractController.getContractByCompanyId)
  .post("/contracts/", ContractController.createContract)
  .delete("/contracts/:id", ContractController.deleteContract);

export default router;
