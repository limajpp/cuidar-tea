import { z } from "zod";
import { telefones_tipo, pacientes_nivel_tea } from "../generated/prisma";

const telefoneSchema = z.object({
  ddd: z.string().length(2, "O DDD deve ter 2 dígitos."),
  numero: z
    .string()
    .min(8, "O número de telefone deve ter no mínimo 8 dígitos."),
  tipo: z.enum(telefones_tipo),
});

const enderecoSchema = z.object({
  cep: z
    .string()
    .min(8, "O CEP é obrigatório e deve ter pelo menos 8 dígitos."),
  logradouro: z.string().min(1, { message: "Insira o logradouro." }),
  numero: z.string().min(1, { message: "Insira o número." }),
  bairro: z.string().min(1, { message: "Insira o bairro." }),
  cidade: z.string().min(1, { message: "Insira a cidade." }),
  estado: z.string().length(2, "O estado deve ser uma sigla com 2 letras."),
  complemento: z.string().optional(),
  apelido_endereco: z.string().optional(),
});

export const criarContaFamiliaSchema = z.object({
  body: z
    .object({
      email: z
        .string()
        .min(1, { message: "O e-mail é obrigatório." })
        .email("O formato de e-mail está inválido."),
      senha: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
      nome_titular: z.string().optional(),
      cpf: z.string().min(11, {
        message: "O CPF é obrigatório e deve ter no mínimo 11 dígitos.",
      }),
      nome_paciente: z
        .string()
        .min(1, { message: "O nome do paciente é obrigatório." }),
      telefone: telefoneSchema,
      endereco: enderecoSchema,
      e_titular: z.boolean(),
      data_nascimento: z
        .string()
        .min(1, { message: "A data de nascimento é obrigatória." })
        .refine((date) => !isNaN(Date.parse(date)), {
          message: "O formato de data de nascimento é inválido.",
        }),
      nivel_tea: z.enum(pacientes_nivel_tea),
    })
    .superRefine((data, ctx) => {
      // Caso o paciente não for o titular.
      if (!data.e_titular) {
        if (!data.nome_titular || data.nome_titular.trim() === "") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "O nome do titular é obrigatório quando o paciente é dependente.",
            path: ["nome_titular"],
          });
        }
      }
      // Se "data.e_titular" for true, nenhuma verificação extra é necessária para nome_titular, pois ele já está marcado como .optional() no schema.
    }),
});

export type CriarContaFamiliaDTO = z.infer<
  typeof criarContaFamiliaSchema
>["body"];
