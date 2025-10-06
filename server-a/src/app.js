import express from "express";
import cors from "cors";
import animalsRouter from "./routes/animals.js";

const app = express();
app.use(cors());
app.use(express.json());

// Pääsivu
app.get("/", (req, res) => {
  res.send("Server A (Animal API) toimii ja on yhteydessä tietokantaan!");
});

// Käytä eläinreittejä
app.use("/animals", animalsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server A käynnissä portissa ${PORT}`));
