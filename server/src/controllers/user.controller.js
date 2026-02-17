import { User } from "../models/User.model.js";
import { comparePassword, hashPassword } from "../services/hashService.js";
import { generateToken } from "../services/jwtService.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking if the user exists
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res
        .status(409)
        .json({ message: "User already exist with this email" });

    // Hashing password
    const hashedPassword = await hashPassword(password);

    // adding user to the database
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successful",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // checking if the user exist
    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({ message: "Invalid Email or password." });

    const hashedPassword = user.password;
    const matchedPassword = await comparePassword(password, hashedPassword);

    if (!matchedPassword)
      return res.status(401).json({ message: "Invalid Email or password." });

    const token = generateToken({
      id: user._id,
      name: user.name,
      email: user.email,
    });

    res.status(200).json({
      message: "User logged in successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
