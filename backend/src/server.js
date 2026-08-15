import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import assessmentRoutes from "./routes/assessmentRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

dotenv.config();

connectDB();

const app = express();

// =======================
// Middleware
// =======================

app.use(cors());
app.use(express.json());

// =======================
// Health Route
// =======================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Charcha Backend API 🚀",
  });
});

// =======================
// API Routes
// =======================

// Authentication
app.use("/api/auth", authRoutes);

// Assessment
app.use("/api/assessment", assessmentRoutes);

// Dashboard
app.use("/api/dashboard", dashboardRoutes);

// Analytics
app.use("/api/analytics", analyticsRoutes);

// =======================
// Server
// =======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
