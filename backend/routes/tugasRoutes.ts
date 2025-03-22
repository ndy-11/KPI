import express from "express";
import TugasModel from "../models/Tugas";

const router = express.Router();

// Menambahkan Tugas Baru
router.post("/add", async (req, res) => {
  try {
    const { title, description, assignedTo, unit, status } = req.body;
    const newTugas = new TugasModel({ title, description, assignedTo, unit, status });
    await newTugas.save();
    res.status(201).json(newTugas);
  } catch (error) {
    res.status(400).json({ message: "Error adding tugas", error });
  }
});

// Mendapatkan Tugas Berdasarkan Unit
router.get("/:unit", async (req, res) => {
  try {
    const tugas = await TugasModel.find({ unit: req.params.unit });
    res.status(200).json(tugas);
  } catch (error) {
    res.status(400).json({ message: "Error fetching tugas", error });
  }
});

export default router;
