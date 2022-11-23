import express from "express";

import CompaniesController from "../controllers/companiesController.js";

const router = express.Router();

router
  .get("/companies", CompaniesController.findAll)
  .get("/companies/:id", CompaniesController.findById)
  .post("/companies", CompaniesController.create);
export default router;
