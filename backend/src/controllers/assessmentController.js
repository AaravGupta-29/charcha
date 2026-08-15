import Assessment from "../models/Assessment.js";

/*
    @route   POST /api/assessment
    @access  Private
*/

// Submit Assessment
export const submitAssessment = async (req, res) => {
  try {
    const {
      screenTime,
      socialMediaHours,
      sleepHours,
      stressLevel,
      productivityScore,
      anxietyLevel,
    } = req.body;

    // Validate required fields
    if (
      screenTime === undefined ||
      socialMediaHours === undefined ||
      sleepHours === undefined ||
      stressLevel === undefined ||
      productivityScore === undefined ||
      anxietyLevel === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all assessment fields.",
      });
    }

    const assessment = await Assessment.create({
      user: req.user._id,
      screenTime,
      socialMediaHours,
      sleepHours,
      stressLevel,
      productivityScore,
      anxietyLevel,
    });

    res.status(201).json({
      success: true,
      message: "Assessment submitted successfully.",
      assessment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
    @route   GET /api/assessment
    @access  Private
*/

// Get Latest Assessment
export const getLatestAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findOne({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    if (!assessment) {
      return res.status(404).json({
        success: false,
        message: "No assessment found.",
      });
    }

    res.status(200).json({
      success: true,
      assessment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
