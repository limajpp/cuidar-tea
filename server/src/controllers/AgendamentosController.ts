import { Request, Response } from "express";
import { AgendamentosService } from "../services/AgendamentosService";
import { CriarAgendamentoDTO } from "../validators/agendamentosValidator";
import { AvaliarAgendamentoDTO } from "../validators/agendamentosValidator";

const agendamentosService = new AgendamentosService();

export class AgendamentosController {
  public async criarAgendamento(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const idPaciente = req.usuario?.id_paciente;
      if (!idPaciente) {
        return res.status(403).json({
          message: "Acesso negado. Apenas pacientes podem criar agendamentos.",
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
      return res.status(500).json({
        message: "Ocorreu um erro interno ao processar sua solicitação.",
      });
    }
  }

  public async adicionarAvaliacao(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const idAgendamento = parseInt(req.params.id);
      const idPaciente = req.usuario?.id_paciente;
      const dadosAvaliacao: AvaliarAgendamentoDTO = req.body;
      if (!idPaciente) {
        return res
          .status(403)
          .json({ message: "Acesso negado. Apenas pacientes podem avaliar." });
      }

      const resultado = await agendamentosService.adicionarAvaliacao(
        idAgendamento,
        idPaciente,
        dadosAvaliacao
      );

      return res.status(200).json(resultado);
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return res.status(404).json({ message: error.message });
      }
      if (error.message.includes("Acesso negado")) {
        return res.status(403).json({ message: error.message });
      }
      if (error.message.includes("já foi avaliado")) {
        return res.status(409).json({ message: error.message });
      }
      if (error.message.includes("FINALIZADO")) {
        return res.status(400).json({ message: error.message });
      }

      console.error("Erro ao adicionar avaliação:", error);
      return res.status(500).json({ message: "Ocorreu um erro interno." });
    }
  }

  public async finalizarAgendamento(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const idAgendamento = parseInt(req.params.id);
      const idUsuarioLogado = req.usuario?.id_usuario;
      if (!idUsuarioLogado) {
        return res.status(401).json({ message: "Usuário não autenticado." });
      }

      const resultado = await agendamentosService.finalizarAgendamento(
        idAgendamento,
        idUsuarioLogado
      );

      return res.status(200).json(resultado);
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return res.status(404).json({ message: error.message });
      }
      if (error.message.includes("Acesso negado")) {
        return res.status(403).json({ message: error.message });
      }
      if (error.message.includes("AGENDADO")) {
        return res.status(400).json({ message: error.message });
      }

      console.error("Erro ao finalizar agendamento:", error);
      return res.status(500).json({ message: "Ocorreu um erro interno." });
    }
  }

  public async cancelarAgendamento(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const idAgendamento = parseInt(req.params.id);
      const idUsuarioLogado = req.usuario?.id_usuario;
      if (!idUsuarioLogado) {
        return res.status(401).json({ message: "Usuário não autenticado." });
      }

      const resultado = await agendamentosService.cancelarAgendamento(
        idAgendamento,
        idUsuarioLogado
      );

      return res.status(200).json(resultado);
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return res.status(404).json({ message: error.message });
      }
      if (error.message.includes("Acesso negado")) {
        return res.status(403).json({ message: error.message });
      }
      if (error.message.includes("Não é possível cancelar")) {
        return res.status(400).json({ message: error.message });
      }

      console.error("Erro ao cancelar agendamento:", error);
      return res.status(500).json({ message: "Ocorreu um erro interno." });
    }
  }
}
