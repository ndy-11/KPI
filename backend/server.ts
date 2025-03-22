import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import absensiRoutes from "./routes/absensiRoutes";
import tugasRoutes from "./routes/tugasRoutes";
import rapatRoutes from "./routes/rapatRoutes";
import kpiRoutes from "./routes/kpiRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/absensi", absensiRoutes);
app.use("/api/tugas", tugasRoutes);
app.use("/api/rapat", rapatRoutes);
app.use("/api/kpi", kpiRoutes);

// Connect to DB
mongoose
  .connect("mongodb://localhost:27017/kpiApp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Menjalankan server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
