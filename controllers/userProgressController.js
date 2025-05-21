const userProgressModel = require("../models/userProgressModel");

const getUserProgresses = async (req, res) => {
  try {
    const progresses = await userProgressModel.getAllProgresses();
    res.json(progresses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil data user_progresses" });
  }
};

const createUserProgress = async (req, res) => {
  try {
    const { user_id, progress_type, total_score } = req.body;

    if (!user_id || !progress_type || total_score === undefined) {
      return res
        .status(400)
        .json({ error: "user_id, progress_type, dan total_score wajib diisi" });
    }

    const newProgress = await userProgressModel.createProgress({
      user_id,
      progress_type,
      total_score,
    });

    res.status(201).json(newProgress);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal membuat data user_progress" });
  }
};

module.exports = {
  getUserProgresses,
  createUserProgress,
};
