// backend/models/taskModel.ts
import { Schema, model } from "mongoose";

interface Tugas {
  title: string;
  description: string;
  assignedTo: string; // Menyimpan ID karyawan
  unit: string; // Unit yang terkait dengan tugas
  status: "Pending" | "In Progress" | "Completed"; // Status tugas
}

const tugasSchema = new Schema<Tugas>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: String, required: true },
  unit: { type: String, required: true },
  status: { type: String, enum: ["Pending", "In Progress", "Completed"], required: true },
});

const TugasModel = model<Tugas>("Tugas", tugasSchema);
export default TugasModel;
