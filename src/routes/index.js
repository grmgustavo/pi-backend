import express from "express";
import professionals from "./professionalsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res, start) => {
    res.status(200).send({ titulo: "Body Shore API" });
  });

  app.use(express.json(), professionals);
};

export default routes;
