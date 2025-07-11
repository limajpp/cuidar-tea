import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./config/dbConnection.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors(), express.json());

app.get("/", (req, res) => {
  res.status(200).send("Cuidar TEA - API");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}...`);
});
