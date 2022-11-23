import express from "express";
import ClientController from "../controllers/clientsController.js";

const router = express.Router();

router
  .get("/clients", ClientController.findAll)
  .get("/clients/:id", ClientController.findById)
  .post("/clients", ClientController.create)
  .put("/clients/:id", ClientController.update)
  .delete("/clients/:id", ClientController.remove);
export default router;
