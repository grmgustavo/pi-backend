import express from "express";
import professionals from "./professionalsRoutes.js";
import clients from "./clientsRoutes.js";
import companies from "./companiesRoutes.js";
import contracts from "./contractsRoutes.js";
import tokens from "./tokenRoutes.js";
import authMiddleware from "../middlewares/authMiddleware.js";


const routes = (app) => {
  app.route("/").get((req, res, start) => {
    res.status(200).send({ titulo: "Body Shore API" });
  });

  app.use(tokens)
  app.use(authMiddleware)
  app.use(express.json(), professionals, clients, companies, contracts, );
};

export default routes;
