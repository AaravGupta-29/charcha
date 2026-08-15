import express from "express";

import {
  submitAssessment,
  getLatestAssessment,
} from "../controllers/assessmentController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Submit a new assessment
router.post("/", authMiddleware, submitAssessment);

// Get the latest assessment of the logged-in user
router.get("/", authMiddleware, getLatestAssessment);

export default router;
