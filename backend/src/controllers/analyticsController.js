import Assessment from "../models/Assessment.js";

// @route   GET /api/analytics/history
// @access  Private

export const getAnalyticsHistory = async (req, res) => {
  try {
    const assessments = await Assessment.find({
      user: req.user._id,
    }).sort({ createdAt: 1 });

    const history = assessments.map((item) => ({
      date: item.createdAt.toISOString().split("T")[0],
      screenTime: item.screenTime,
      sleepHours: item.sleepHours,
      stressLevel: item.stressLevel,
      productivityScore: item.productivityScore,
      anxietyLevel: item.anxietyLevel,
      addictionRisk: item.addictionRisk,
    }));

    res.status(200).json({
      success: true,
      totalRecords: history.length,
      history,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
