import { Router } from "express";
import { ProfissionalController } from "../controllers/ProfissionaisController";
import validate from "../middlewares/validate";
import { authMiddleware } from "../middlewares/auth";
import { criarGradeSchema } from "../validators/profissionaisValidator";

const profissionaisRoutes = Router();
const profissionalController = new ProfissionalController();

profissionaisRoutes.post(
  "/atualizarHorarios",
  authMiddleware,
  validate(criarGradeSchema),
  (req, res) => profissionalController.atualizarGradeDeTrabalho(req, res)
);

profissionaisRoutes.get("/:id/disponibilidade", (req, res) =>
  profissionalController.buscarDisponibilidade(req, res)
);

export default profissionaisRoutes;
