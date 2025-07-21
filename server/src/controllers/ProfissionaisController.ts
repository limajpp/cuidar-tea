import { Request, Response } from "express";
import { ProfissionalService } from "../services/ProfissionaisService";
import horarariosDeTrabalhoDTO from "../DTOs/profissionalDTO";

const profissionalService = new ProfissionalService();

/*export class ProfissionalController {
  public async incluirHorarioDeTrabalho(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const { dia_semana, horario_inicio, horario_fim } = req.body;
      const DTOHorariosDeTrabalho: horarariosDeTrabalhoDTO = {
        dia_semana,
        horario_inicio,
        horario_fim,
      };

      const resultado = await profissionalService.incluirHorarioDeTrabalho(
        idProfissional,
        DTOHorariosDeTrabalho
      );
    } catch (error: any) {}
  }
}*/
