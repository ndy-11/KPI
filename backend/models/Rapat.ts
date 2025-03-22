import { Schema, model } from "mongoose";

interface Rapat {
  tanggal: string;
  unit: string;
  agenda: string;
  hasil: string;
  peserta: string[]; // Array ID karyawan yang hadir
}

const rapatSchema = new Schema<Rapat>({
  tanggal: { type: String, required: true },
  unit: { type: String, required: true },
  agenda: { type: String, required: true },
  hasil: { type: String, required: true },
  peserta: { type: [String], required: true },
});

const RapatModel = model<Rapat>("Rapat", rapatSchema);
export default RapatModel;
