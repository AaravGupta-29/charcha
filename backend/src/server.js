import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import assessmentRoutes from "./routes/assessmentRoutes.js";

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Charcha Backend API 🚀",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/assessment", assessmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
