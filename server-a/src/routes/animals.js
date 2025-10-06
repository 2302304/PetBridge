import express from "express";
import pool from "../services/db.js";

const router = express.Router();

// Hae kaikki eläimet
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM animals ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("Virhe eläinten haussa:", err);
    res.status(500).json({ error: "Tietokantavirhe" });
  }
});

// Hae yksittäinen eläin id:n perusteella
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM animals WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Eläintä ei löytynyt" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Virhe eläimen haussa:", err);
    res.status(500).json({ error: "Tietokantavirhe" });
  }
});

export default router;
