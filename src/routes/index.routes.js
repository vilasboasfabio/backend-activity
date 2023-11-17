import { Router } from "express";
import clouthsRouter from "./clothing.routes.js";

const router = Router();

router.use("/clothing", clouthsRouter);


export default router;