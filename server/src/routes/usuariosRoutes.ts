import { Router } from "express";
import { UsuarioController } from "../controllers/UsuariosController";
import validate from "../middlewares/validate";
import { criarContaFamiliaSchema } from "../validators/usuariosValidator";

const usuarioRoutes = Router();
const usuarioController = new UsuarioController();

usuarioRoutes.post(
  "/criarContaFamilia",
  validate(criarContaFamiliaSchema),
  (req, res) => usuarioController.criarContaFamilia(req, res)
);
usuarioRoutes.post("/criarContaProfissional", (req, res) =>
  usuarioController.criarContaProfissional(req, res)
);

export default usuarioRoutes;
