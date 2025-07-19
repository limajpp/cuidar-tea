import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const usuarioRoutes = Router();
const usuarioController = new UsuarioController();

usuarioRoutes.post("/criarContaFamilia", (req, res) =>
  usuarioController.criarContaFamilia(req, res)
);
usuarioRoutes.post("/criarContaProfissional", (req, res) =>
  usuarioController.criarContaProfissional(req, res)
);

export default usuarioRoutes;
