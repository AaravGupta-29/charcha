import express from "express";

import { getProfile, updateProfile } from "../controllers/profileController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get logged-in user's profile
router.get("/", authMiddleware, getProfile);

// Update logged-in user's profile
router.put("/", authMiddleware, updateProfile);

export default router;
