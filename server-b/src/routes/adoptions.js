import express from "express";
import pool from "../services/db.js";

const router = express.Router();

// Luo uusi adoptiohakemus
router.post("/", async (req, res) => {
  try {
    const { animal_id, adopter_name, adopter_email } = req.body;

    if (!animal_id || !adopter_name || !adopter_email) {
      return res.status(400).json({ message: "Puuttuvia tietoja hakemuksessa" });
    }

    // Lisää hakemus tauluun
    await pool.query(
      "INSERT INTO adoptions (animal_id, adopter_name, adopter_email, created_at) VALUES ($1, $2, $3, NOW())",
      [animal_id, adopter_name, adopter_email]
    );

    // Päivitä eläimen status
    await pool.query("UPDATE animals SET status = 'adopted' WHERE id = $1", [animal_id]);

    res.status(201).json({ message: "Adoptiohakemus vastaanotettu ja eläimen tila päivitetty" });
  } catch (err) {
    console.error("Virhe adoptiohakemuksessa:", err);
    res.status(500).json({ error: "Tietokantavirhe" });
  }
});

export default router;
