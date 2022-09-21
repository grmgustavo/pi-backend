import express from "express";
import CompanyController from "../controllers/CompaniesController.js";

const router = express.Router();

router
  .get("/companies", CompanyController.getCompanies)
  .get("/companies/:id", CompanyController.getCompanyById)
  .post("/companies", CompanyController.createCompany)
  .put("/companies", CompanyController.updateCompany)
  .delete("/companies/:id", CompanyController.deleteCompany);
export default router;
