import { Request, Response } from "express";
import { AgendamentosService } from "../services/AgendamentosService";
import { CriarAgendamentoDTO } from "../validators/agendamentosValidator";

const agendamentosService = new AgendamentosService();

export class AgendamentosController {
  public async criarAgendamento(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const idPaciente = req.usuario?.id_paciente;
      if (!idPaciente) {
        return res
          .status(403)
          .json({
            message:
              "Acesso negado. Apenas pacientes podem criar agendamentos.",
          });
      }

      const dadosAgendamento: CriarAgendamentoDTO = req.body;
      const resultado = await agendamentosService.criarAgendamento(
        idPaciente,
        dadosAgendamento
      );

      return res.status(201).json(resultado);
    } catch (error: any) {
      if (error.message.includes("horário acabou de ser preenchido")) {
        return res.status(409).json({ message: error.message });
      }

      console.error("Erro ao criar agendamento:", error);
      return res
        .status(500)
        .json({
          message: "Ocorreu um erro interno ao processar sua solicitação.",
        });
    }
  }
}
