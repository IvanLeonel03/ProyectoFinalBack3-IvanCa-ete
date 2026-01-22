import express from "express";
import usersRouter from "./routes/users.router.js";
import adoptionRouter from "./routes/adoption.router.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpecs } from "./docs/swagger.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRouter);
app.use("/api/adoptions", adoptionRouter);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

export default app;
