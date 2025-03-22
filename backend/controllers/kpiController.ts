import { Request, Response } from "express";
import { calculateKPI as calculateAttendanceKPI } from "./absensiController"; // Menghitung KPI Absensi
import { calculateTaskScore } from "./tugasController"; // Menghitung KPI Tugas

// Fungsi untuk menghitung KPI secara keseluruhan
export const calculateKPI = async (req: Request, res: Response) => {
  const { employeeId } = req.params;

  try {
    // Hitung KPI berdasarkan absensi
    const attendanceKPI = await calculateAttendanceKPI(req, res);

    if (!attendanceKPI) {
      return res.status(404).json({ error: "KPI Absensi tidak ditemukan" });
    }

    // Hitung KPI berdasarkan tugas
    const taskScore = await calculateTaskScore(employeeId);

    // Total KPI (penjumlahan absensiKPI dan taskScore)
    const totalKPI = attendanceKPI.kpi + taskScore;

    res.json({ employeeId, totalKPI });
  } catch (error) {
    console.error("Error calculating total KPI:", error);
    res.status(500).json({ error: "Gagal menghitung total KPI" });
  }
};
