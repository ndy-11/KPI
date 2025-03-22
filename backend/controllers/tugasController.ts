// backend/controllers/taskController.ts
import { Request, Response } from "express";
import TugasModel from "../models/Tugas"; // Model Tugas

// Fungsi untuk menghitung skor tugas berdasarkan status tugas
export const calculateTaskScore = async (employeeId: string): Promise<number> => {
  try {
    // Ambil semua tugas yang sudah diberikan kepada karyawan berdasarkan assignedTo
    const tasks = await TugasModel.find({ assignedTo: employeeId });

    let taskScore = 0;

    // Hitung skor berdasarkan status tugas
    tasks.forEach((task) => {
      if (task.status === "Completed") taskScore += 2; // Tugas completed mendapatkan nilai 2
      else taskScore += 0; // Tugas selain completed (Pending, In Progress) mendapatkan nilai 0
    });

    return taskScore;
  } catch (error) {
    console.error("Error calculating task score:", error);
    throw error;
  }
};
