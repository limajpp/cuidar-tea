import prisma from "../config/prismaClient";
import horariosDeTrabalhoDTO from "../DTOs/profissionalDTO";

export class ProfissionalService {
  public async incluirHorarioDeTrabalho(
    idProfissional: number,
    DTOHorariosDeTrabalho: horariosDeTrabalhoDTO
  ) {
    const horarioExistente = await prisma.horarios_trabalho.findFirst({
      where: {
        dia_semana: DTOHorariosDeTrabalho.dia_semana,
        horario_inicio: DTOHorariosDeTrabalho.horario_inicio,
        horario_fim: DTOHorariosDeTrabalho.horario_fim,
      },
    });
    if (horarioExistente) throw new Error("Esse horário já está cadastrado.");

    return prisma.$transaction(async (tx) => {
      const novoHorario = await tx.horarios_trabalho.create({
        data: {
          dia_semana: DTOHorariosDeTrabalho.dia_semana,
          horario_inicio: DTOHorariosDeTrabalho.horario_inicio,
          horario_fim: DTOHorariosDeTrabalho.horario_fim,
          profissionais: {
            connect: {
              id_profissional: idProfissional,
            },
          },
        },
      });

      return { horario: novoHorario };
    });
  }
}
