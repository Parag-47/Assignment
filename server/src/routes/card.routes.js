import { Router } from "express";
import { createCard, getAllCards, getCardByTitle } from "../controllers/card.controller.js";

const cardRouter = Router();

cardRouter.post("/cards", createCard);
cardRouter.get("/cards", getAllCards);
cardRouter.get("/cards/:title", getCardByTitle);

export default cardRouter;