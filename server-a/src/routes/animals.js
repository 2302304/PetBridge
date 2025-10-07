import express from "express";
import pool from "../services/db.js";
import axios from "axios";

const router = express.Router();
const ADOPTION_SERVICE_URL = process.env.ADOPTION_SERVICE_URL || "http://server-b:3002";

// 🐾 Hae kaikki eläimet
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM animals ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("Virhe eläinten haussa:", err);
    res.status(500).json({ error: "Tietokantavirhe" });
  }
});

// 🐾 Hae yksittäinen eläin id:n perusteella
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

// 🐾 Adoptio — lähettää tiedot Server B:lle
router.post("/:id/adopt", async (req, res) => {
  const { id } = req.params;
  const { adopter_name, adopter_email } = req.body;

  try {
    // Tarkista että eläin on olemassa
    const result = await pool.query("SELECT * FROM animals WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Eläintä ei löytynyt" });
    }

    // Lähetä adoptiohakemus Server B:lle
    const response = await axios.post(`${ADOPTION_SERVICE_URL}/adoptions`, {
      animal_id: id,
      adopter_name,
      adopter_email
    });

    res.status(201).json({
      message: "Adoptio lähetetty Server B:lle",
      serverB_response: response.data
    });
  } catch (err) {
    console.error("Virhe adoptiossa:", err.message);
    res.status(500).json({ error: "Virhe palvelinten välisessä viestinnässä" });
  }
});

export default router;
