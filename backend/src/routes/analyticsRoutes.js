import express from "express";

import { getAnalyticsHistory } from "../controllers/analyticsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get assessment history
router.get("/history", authMiddleware, getAnalyticsHistory);

export default router;
