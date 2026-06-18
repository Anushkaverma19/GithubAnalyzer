const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check user exists
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 🔥 HASH PASSWORD (IMPORTANT)
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("ORIGINAL:", password);
    console.log("HASHED:", hashedPassword);

    // save in DB
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created",
      user,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};