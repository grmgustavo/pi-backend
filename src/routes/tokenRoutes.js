import express from "express";
import ClientsService from "../services/clientsService";
import TokenService from "../services/tokenService";

const token = express.Router();

token.get("/token/:id", async (req, res) => {
  const { id } = req.params;
  const client = await ClientsService.findById(id);

  if (!client) {
    res.status(404).json(`Client ${id} not found`);
  }
  const token = TokenService.createToken(client);
  res.json({ token: token });
});
