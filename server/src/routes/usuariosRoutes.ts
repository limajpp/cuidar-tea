import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const usuarioRoutes = Router();
const usuarioController = new UsuarioController();

usuarioRoutes.post("/criarContaFamilia", (req, res) =>
  usuarioController.criarContaFamilia(req, res)
);

export default usuarioRoutes;
