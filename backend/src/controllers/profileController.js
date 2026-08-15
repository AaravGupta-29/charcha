import User from "../models/User.js";

/*
    @route   GET /api/profile
    @access  Private
*/

// Get Logged-in User Profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    res.status(200).json({
      success: true,
      profile: user,
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
    @route   PUT /api/profile
    @access  Private
*/

// Update User Profile
export const updateProfile = async (req, res) => {
  try {
    const { fullName, age, university, course } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.fullName = fullName ?? user.fullName;
    user.age = age ?? user.age;
    user.university = university ?? user.university;
    user.course = course ?? user.course;

    const updatedUser = await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      profile: {
        _id: updatedUser._id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        age: updatedUser.age,
        university: updatedUser.university,
        course: updatedUser.course,
        profilePicture: updatedUser.profilePicture,
        isVerified: updatedUser.isVerified,
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
