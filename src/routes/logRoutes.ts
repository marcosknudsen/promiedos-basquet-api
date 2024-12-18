import { Router } from "express";
import { body, param } from "express-validator";
import { LogController } from "../controllers/LogController";
import { handleInputErrors } from "../middleware/validation";
const router = Router();

router.get("/", LogController.getAll);

router.get(
  "/:id",
  LogController.getLogById
);

router.post(
  "/",
  body("ip").notEmpty().withMessage("IP is required"),
  body("date").notEmpty().withMessage("Date is required"),
  body("action").notEmpty().withMessage("Action is required"),
  handleInputErrors,
  LogController.create
);

router.put(
  "/:id",
  body("projectName").notEmpty().withMessage("Project name is required"),
  body("clientName").notEmpty().withMessage("Client name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  handleInputErrors,
  LogController.updateLog
);

router.delete("/:id", LogController.deleteLog);

export default router;
