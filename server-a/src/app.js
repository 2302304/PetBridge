import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server A (Animal API) toimii!");
});

// Placeholder eläinreitit
app.get("/animals", (req, res) => {
  res.json({ message: "Eläinlista tulee tänne myöhemmin" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server A käynnissä portissa ${PORT}`));
