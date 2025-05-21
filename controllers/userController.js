const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data users" });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username dan password wajib diisi" });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = await userModel.createUser({
      username,
      passwordHash,
      email,
    });
    res.status(201).json(newUser);
  } catch (err) {
    if (err.code === "23505") {
      // Unique violation
      res.status(400).json({ error: "Username atau email sudah digunakan" });
    } else {
      res.status(500).json({ error: "Gagal membuat user" });
    }
  }
};

module.exports = {
  getUsers,
  createUser,
};
