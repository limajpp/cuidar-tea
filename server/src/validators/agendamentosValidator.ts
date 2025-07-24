import { z } from "zod";

export const criarAgendamentoSchema = z.object({
  body: z.object({
    profissionais_id_profissional: z
      .number()
      .int()
      .positive("O ID do profissional deve ser um número positivo."),
    enderecos_id_endereco: z
      .number()
      .int()
      .positive("O ID do endereço deve ser um número positivo."),
    data_horario_inicio: z.coerce.date(),
    duracao_consulta_minutos: z
      .number()
      .int()
      .positive("A duração da consulta deve ser um número positivo."),
  }),
});

export type CriarAgendamentoDTO = z.infer<
  typeof criarAgendamentoSchema
>["body"];
