const express = require("express");
const app = express();
const userRoutes = require("./routes/userRouter");
const userProgressRoutes = require("./routes/userProgressRouter");

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", userProgressRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
