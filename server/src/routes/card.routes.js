import { Router } from "express";
import { createCard, getAllCards, getCardById } from "../controllers/card.controller.js";

const cardRouter = Router();

cardRouter.post("/create", createCard);
cardRouter.get("/", getAllCards);
cardRouter.get("/card", getCardById);

export default cardRouter;