import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server B (Adoption API) toimii!");
});

// Placeholder adoptio-reitti
app.post("/adoptions", (req, res) => {
  res.json({ message: "Adoptio tallennetaan tänne myöhemmin" });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server B käynnissä portissa ${PORT}`));
