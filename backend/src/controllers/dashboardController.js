import Assessment from "../models/Assessment.js";

export const getDashboard = async (req, res) => {
  try {
    const assessments = await Assessment.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    if (assessments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No assessment data found.",
      });
    }

    const latest = assessments[0];

    const totalAssessments = assessments.length;

    const averageScreenTime =
      assessments.reduce((sum, item) => sum + item.screenTime, 0) /
      totalAssessments;

    const averageSleepHours =
      assessments.reduce((sum, item) => sum + item.sleepHours, 0) /
      totalAssessments;

    res.status(200).json({
      success: true,
      dashboard: {
        latestAssessment: latest,
        totalAssessments,
        averageScreenTime: Number(averageScreenTime.toFixed(1)),
        averageSleepHours: Number(averageSleepHours.toFixed(1)),
        addictionRisk: latest.addictionRisk,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
