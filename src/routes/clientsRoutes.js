import express from "express";
import ClientController from "../controllers/clientsController.js";

const router = express.Router();

router
  .get("/clients", ClientController.getClients)
  .get("/clients/:id", ClientController.getClientById)
  .post("/clients", ClientController.createClient)
  .put("/clients", ClientController.updateClient)
  .delete("/clients/:id", ClientController.deleteClient);
export default router;
