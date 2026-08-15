import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema(
  {
    // Link assessment to the logged-in user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Assessment responses
    screenTime: {
      type: Number,
      required: true,
    },

    socialMediaHours: {
      type: Number,
      required: true,
    },

    sleepHours: {
      type: Number,
      required: true,
    },

    stressLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },

    productivityScore: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },

    anxietyLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },

    // Calculated later by our ML model
    addictionRisk: {
      type: String,
      enum: ["Low", "Moderate", "High"],
      default: "Low",
    },

    aiRecommendation: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Assessment", assessmentSchema);
