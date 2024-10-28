import User from "../modal/user.modal.js";
import bcryptjs from "bcryptjs";

export const singup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json("User allrady exists");
    }
    const hashPass = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPass,
    });
    await createdUser.save();
    res.status(200).json({msg: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error :" + error);
    res.status(500).json("Internal Server Error");
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json("Invalid username or password");
    } else {
      res.status(200).json({
        msg: "Login Sucsessful",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error : " + error);
    res.status(500).json("Internal Server Error");
  }
};
