import express from "express";
import { calculateKPI } from "../controllers/kpiController";

const router = express.Router();

// Menghitung KPI
router.get("/:employeeId", calculateKPI);
