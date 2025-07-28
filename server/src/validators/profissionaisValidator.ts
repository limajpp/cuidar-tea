import { z } from "zod";

export const atualizarDescricaoSchema = z.object({
  body: z.object({
    descricao: z.string().nullable().optional(),
  }),
});

export const atualizarValorConsultaSchema = z.object({
  body: z.object({
    valor_consulta: z
      .number()
      .positive("O valor da consulta deve ser um número positivo."),
  }),
});

export const atualizarConvenioSchema = z.object({
  body: z.object({
    aceita_convenio: z.boolean(),
  }),
});

export const horariosTrabalhoSchema = z
  .object({
    dia_semana: z
      .number()
      .int()
      .min(1, "O dia da semana deve ser no mínimo 1 (Domingo).")
      .max(7, "O dia da semana deve ser no máximo 7 (Sábado)."),
    // Valida se a string está no formato "HH:MM" (ex: "09:00" ou "23:59").
    horario_inicio: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: "Formato de hora de início inválido. Use HH:MM.",
    }),
    horario_fim: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: "Formato de hora de fim inválido. Use HH:MM.",
    }),
  })
  .refine(
    (data) => {
      return data.horario_fim > data.horario_inicio;
    },
    {
      message: "O horário de término deve ser posterior ao horário de início.",
      path: ["horario_fim"],
    }
  );

// Grade de horários.
export const criarGradeSchema = z.object({
  body: z.array(horariosTrabalhoSchema),
});

export type HorariosTrabalhoDTO = z.infer<typeof horariosTrabalhoSchema>;
export type AtualizarConvenioDTO = z.infer<
  typeof atualizarConvenioSchema
>["body"];
export type AtualizarValorConsultaDTO = z.infer<
  typeof atualizarValorConsultaSchema
>["body"];
export type AtualizarDescricaoDTO = z.infer<
  typeof atualizarDescricaoSchema
>["body"];
