import express from "express";
import RapatModel from "../models/Rapat";

const router = express.Router();

// Menambahkan Rapat Baru
router.post("/add", async (req, res) => {
  try {
    const { tanggal, unit, agenda, hasil, peserta } = req.body;
    const newRapat = new RapatModel({ tanggal, unit, agenda, hasil, peserta });
    await newRapat.save();
    res.status(201).json(newRapat);
  } catch (error) {
    res.status(400).json({ message: "Error adding rapat", error });
  }
});

// Mendapatkan Rapat Berdasarkan Unit
router.get("/:unit", async (req, res) => {
  try {
    const rapat = await RapatModel.find({ unit: req.params.unit });
    res.status(200).json(rapat);
  } catch (error) {
    res.status(400).json({ message: "Error fetching rapat", error });
  }
});

export default router;
