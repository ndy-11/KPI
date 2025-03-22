import { Request, Response } from "express";
import AbsensiModel from "../models/Absensi"; // Model Absensi

// Fungsi untuk menambahkan absensi
export const addAttendance = async (req: Request, res: Response) => {
  const { employeeId, status, tanggal } = req.body;

  try {
    const newAbsensi = new AbsensiModel({
      employeeId,
      status,
      tanggal,
    });

    await newAbsensi.save();
    res.status(201).json({ message: "Absensi berhasil ditambahkan" });
  } catch (error) {
    console.error("Error adding attendance:", error);
    res.status(500).json({ error: "Gagal menambahkan absensi" });
  }
};

// Fungsi untuk menghitung KPI berdasarkan absensi
export const calculateKPI = async (req: Request, res: Response) => {
  const { employeeId } = req.params;

  try {
    // Ambil semua absensi karyawan dari database
    const absensiData = await AbsensiModel.find({ employeeId });

    let absensiScore = 0;

    // Hitung skor berdasarkan status absensi
    absensiData.forEach((attendance) => {
      if (attendance.status === "Hadir") absensiScore += 2;
      else if (attendance.status === "Sakit") absensiScore += 1;
      else if (attendance.status === "Tidak Hadir" || attendance.status === "Izin") absensiScore += 0;
    });

    // Pastikan return value tidak undefined, selalu mengembalikan objek dengan kpi
    return { kpi: absensiScore };
  } catch (error) {
    console.error("Error calculating KPI:", error);
    res.status(500).json({ error: "Gagal menghitung KPI" });
    return { kpi: 0 }; // Kembali nilai default jika ada error
  }
};
