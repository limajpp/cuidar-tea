import { Router } from "express";
import { UsuarioController } from "../controllers/UsuariosController";
import { LoginController } from "../controllers/LoginController";
import validate from "../middlewares/validate";
import {
  criarContaFamiliaSchema,
  criarContaProfissionalSchema,
} from "../validators/usuariosValidator";

const usuarioRoutes = Router();
const usuarioController = new UsuarioController();
const loginController = new LoginController();

usuarioRoutes.post(
  "/criarContaFamilia",
  validate(criarContaFamiliaSchema),
  (req, res) => usuarioController.criarContaFamilia(req, res)
);
usuarioRoutes.post(
  "/criarContaProfissional",
  validate(criarContaProfissionalSchema),
  (req, res) => usuarioController.criarContaProfissional(req, res)
);
usuarioRoutes.post("/login", (req, res) => loginController.login(req, res));

export default usuarioRoutes;
