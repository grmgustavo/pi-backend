import express from "express";
import TokenController from "../controllers/tokenController.js";

const router = express.Router();

router.get("/token/:name", TokenController.createToken);


export default router