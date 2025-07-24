import { PrismaClient } from "../generated/prisma";
import { CriarAgendamentoDTO } from "../validators/agendamentosValidator";

const prisma = new PrismaClient();

export class AgendamentosService {
  public async criarAgendamento(
    idPaciente: number,
    dadosAgendamento: CriarAgendamentoDTO
  ) {
    const dataHoraInicio = dadosAgendamento.data_horario_inicio;
    const conflitoExistente = await prisma.agendamentos.findFirst({
      where: {
        profissionais_id_profissional:
          dadosAgendamento.profissionais_id_profissional,
        data_horario_inicio: dataHoraInicio,
      },
    });
    if (conflitoExistente) {
      throw new Error(
        "Este horário acabou de ser preenchido. Por favor, escolha outro."
      );
    }

    const novoAgendamento = await prisma.agendamentos.create({
      data: {
        pacientes_id_paciente: idPaciente,
        profissionais_id_profissional:
          dadosAgendamento.profissionais_id_profissional,
        enderecos_id_endereco: dadosAgendamento.enderecos_id_endereco,
        data_horario_inicio: dataHoraInicio,
        duracao_consulta_minutos: dadosAgendamento.duracao_consulta_minutos,
        status: "AGENDADO", // Status default de qualquer agendamento criado.
      },
      include: {
        profissionais: true,
        enderecos: true,
      },
    });

    return novoAgendamento;
  }
}
