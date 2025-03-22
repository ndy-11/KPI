import { Schema, model } from "mongoose";

interface Absensi {
  employeeId: string;
  tanggal: string;
  status: "Hadir" | "Izin" | "Tidak Hadir" | "Sakit";
}

const absensiSchema = new Schema<Absensi>({
  employeeId: { type: String, required: true },
  tanggal: { type: String, required: true },
  status: { type: String, enum: ["Hadir", "Izin", "Tidak Hadir", "Sakit"], required: true },
});

const AbsensiModel = model<Absensi>("Absensi", absensiSchema);
export default AbsensiModel;
