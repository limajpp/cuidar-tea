import { PrismaClient } from "../generated/prisma";
import { timeStringToDate } from "../utils/time";
import { HorariosTrabalhoDTO } from "../validators/profissionaisValidator";

const prisma = new PrismaClient();

export class ProfissionalService {
  public async atualizarGradeDeTrabalho(
    idProfissional: number,
    gradeDeTrabalho: HorariosTrabalhoDTO[]
  ) {
    return prisma.$transaction(async (tx) => {
      await tx.horarios_trabalho.deleteMany({
        where: {
          profissionais_id_profissional: idProfissional,
        },
      });

      const novosHorariosData = gradeDeTrabalho.map((horario) => ({
        profissionais_id_profissional: idProfissional,
        dia_semana: horario.dia_semana,
        horario_inicio: timeStringToDate(horario.horario_inicio),
        horario_fim: timeStringToDate(horario.horario_fim),
      }));

      await tx.horarios_trabalho.createMany({
        data: novosHorariosData,
      });

      return tx.horarios_trabalho.findMany({
        where: {
          profissionais_id_profissional: idProfissional,
        },
      });
    });
  }

  public async calcularDisponibilidade(idProfissional: number, data: Date) {
    // 1 = Segunda-feira, 2 = Terça-feira, etc...
    const diaDaSemana = data.getDay() === 0 ? 7 : data.getDay();
    const horariosDisponiveis = await prisma.horarios_trabalho.findMany({
      where: {
        profissionais_id_profissional: idProfissional,
        dia_semana: diaDaSemana,
      },
    });

    if (horariosDisponiveis.length === 0) {
      return [];
    }

    const agendamentosDoDia = await prisma.agendamentos.findMany({
      where: {
        profissionais_id_profissional: idProfissional,
        data_horario_inicio: {
          // Pega todos os agendamentos entre o início e o fim do dia solicitado.
          gte: new Date(data.setHours(0, 0, 0, 0)),
          lt: new Date(data.setHours(23, 59, 59, 999)),
        },
      },
    });

    const slotsDisponiveis: string[] = [];
    const duracaoConsulta = 60;
    horariosDisponiveis.forEach((horario) => {
      // Converte os tempos de início e fim do horário para minutos.
      const inicioMinutos =
        horario.horario_inicio.getUTCHours() * 60 +
        horario.horario_inicio.getUTCMinutes();
      const fimMinutos =
        horario.horario_fim.getUTCHours() * 60 +
        horario.horario_fim.getUTCMinutes();

      for (
        let slot = inicioMinutos;
        slot < fimMinutos;
        slot += duracaoConsulta
      ) {
        const hora = Math.floor(slot / 60)
          .toString()
          .padStart(2, "0");
        const minuto = (slot % 60).toString().padStart(2, "0");
        const horarioSlot = `${hora}:${minuto}`;

        const estaOcupado = agendamentosDoDia.some((agendamento) => {
          const horaAgendamento = agendamento.data_horario_inicio
            .getUTCHours()
            .toString()
            .padStart(2, "0");
          const minutoAgendamento = agendamento.data_horario_inicio
            .getUTCMinutes()
            .toString()
            .padStart(2, "0");
          return `${horaAgendamento}:${minutoAgendamento}` === horarioSlot;
        });

        if (!estaOcupado) {
          slotsDisponiveis.push(horarioSlot);
        }
      }
    });

    return slotsDisponiveis;
  }
}
