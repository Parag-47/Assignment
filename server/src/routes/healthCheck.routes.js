import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controller.js";

const healthCheckRouter = Router();

healthCheckRouter.get("/ping", healthCheck);

export default healthCheckRouter;