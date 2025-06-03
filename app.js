const express = require("express");
const app = express();
const leaderboardRoutes = require("./routes/leaderboardRouter");

// Middleware
app.use(express.json());

// Routes
app.use("/api", leaderboardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
