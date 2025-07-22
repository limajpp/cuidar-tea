import { Request, Response } from "express";
import { ProfissionalService } from "../services/ProfissionaisService";
import { HorariosTrabalhoDTO } from "../validators/profissionaisValidator";

const profissionalService = new ProfissionalService();

export class ProfissionalController {
  public async atualizarGradeDeTrabalho(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const idProfissional = req.usuario?.id_profissional;
      if (!idProfissional) {
        return res
          .status(403)
          .json({
            message:
              "Acesso negado. Apenas profissionais podem realizar esta ação.",
          });
      }

      const gradeDeTrabalho: HorariosTrabalhoDTO[] = req.body;
      const resultado = await profissionalService.atualizarGradeDeTrabalho(
        idProfissional,
        gradeDeTrabalho
      );
      return res.status(200).json(resultado);
    } catch (error: any) {
      if (error.message.includes("já está cadastrado")) {
        return res.status(409).json({ message: error.message });
      }
      console.error(error);
      return res
        .status(500)
        .json({ message: "Ocorreu um erro interno no servidor." });
    }
  }
}
