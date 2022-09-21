import express from "express";
import professionals from "./professionalsRoutes.js";
import clients from "./clientsRoutes.js";
import companies from "./companiesRoutes.js";
import contracts from "./contractsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res, start) => {
    res.status(200).send({ titulo: "Body Shore API" });
  });

  app.use(express.json(), professionals, clients, companies, contracts);
};

export default routes;
