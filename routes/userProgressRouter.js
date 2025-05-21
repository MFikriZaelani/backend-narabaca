const express = require("express");
const router = express.Router();
const {
  getUserProgresses,
  createUserProgress,
} = require("../controllers/userProgressController");

router.get("/user_progresses", getUserProgresses);
router.post("/user_progresses", createUserProgress);

module.exports = router;
