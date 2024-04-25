import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();
const app = express();
app.use(cors());

app.get("/ping", (req, res) => {
  try {
    res.json({ message: ["pong"] });
  } catch (error) {
    res.status(500).json({ message: [error.message] });
  }
});

app.listen(process.env.PORT, () => console.log("server on"));
