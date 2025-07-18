import express from "express";
import cors from "cors";
import "./config/dbConnection.ts";
import usuarioRoutes from "./routes/usuariosRoutes";

const app = express();
app.use(cors(), express.json());

app.get("/", (req, res) => {
  res.status(200).send("Cuidar TEA - API");
});

app.use("/api/usuarios", usuarioRoutes);

app.use((req, res) => {
  res.status(404).send({ erro: `Rota ${req.originalUrl} não encontrada...` });
});

export default app;
