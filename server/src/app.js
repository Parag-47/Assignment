import cors from "cors";
import helmet from "helmet";
import express from "express";
import morgan from "morgan";
import cardRouter from "./routes/card.routes.js";
import healthCheckRouter from "./routes/healthCheck.routes.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(morgan('combined'));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cardRouter);
app.use(healthCheckRouter);

export default app;