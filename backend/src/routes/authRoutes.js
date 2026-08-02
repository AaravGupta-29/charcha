import express from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ==============================
// Public Routes
// ==============================

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// ==============================
// Protected Routes
// ==============================

// Get Current Logged-in User
router.get("/me", authMiddleware, getCurrentUser);

export default router;
