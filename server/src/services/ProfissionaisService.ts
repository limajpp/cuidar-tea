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
}
