const express = require("express");
const dotenv = require("dotenv");
const identifyRoute = require("./routes/identifyRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/identify", identifyRoute);

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Bitespeed Identity Reconciliation Service Running 🚀",
  });
});

// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
