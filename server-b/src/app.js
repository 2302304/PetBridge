import express from "express";
import cors from "cors";
import adoptionsRouter from "./routes/adoptions.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server B (Adoption API) toimii!");
});

app.use("/adoptions", adoptionsRouter);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server B käynnissä portissa ${PORT}`));
