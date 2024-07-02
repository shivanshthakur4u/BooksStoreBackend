import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

const createUser = async (req, res) => {
  try {
    const isUser = await User.findOne({ email: req.body.email });
    if (isUser) {
      res.status(400).json({
        success: true,
        message: "User already exist",
      });
    } else {
      const hashedPassowrd = await bcrypt.hash(req.body.password, 10);
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassowrd,
      };
      const user = new User(userData);
      await user.save();
      res.status(200).json({
        success: true,
        message: "User Created Successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const SignInUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!user || !isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credential" });
    } else {
      if (isMatch) {
        res.status(200).json({
          success: true,
          message: "SignIn Sucessfully",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
        });
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export { createUser, SignInUser };
