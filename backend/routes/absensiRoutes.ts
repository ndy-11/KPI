import express from "express";
import { addAttendance } from "../controllers/absensiController"; // Controller Absensi

const router = express.Router();

// Endpoint untuk menambah absensi
router.post("/absensi/add", addAttendance);

export default router;
