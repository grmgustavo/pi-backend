import express from "express";
import professionals from "./professionalsRoutes.js";
import clients from "./clientsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res, start) => {
    res.status(200).send({ titulo: "Body Shore API" });
  });

  app.use(express.json(), professionals, clients);
};

export default routes;
