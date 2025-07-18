import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";
import {
  criarUsuarioDTO,
  criarContaProfissionalDTO,
  criarContaFamiliaDTO,
} from "../DTOs/usuarioDTO";

const prisma = new PrismaClient();

export class UsuarioService {
  public async criarContaFamilia(
    DTOUsuario: criarUsuarioDTO,
    DTOPaciente: criarContaFamiliaDTO
  ) {
    const emailExistente = await prisma.usuarios.findUnique({
      where: { email: DTOUsuario.email },
    });
    if (emailExistente) throw new Error("Este e-mail já está em uso.");

    const cpfExistente = await prisma.pacientes.findUnique({
      where: { cpf: DTOPaciente.cpf },
    });
    if (cpfExistente) throw new Error("Este CPF já está cadastrado.");

    const senhaHash = await bcrypt.hash(DTOUsuario.senha, 8);
    return prisma.$transaction(async (tx) => {
      const novoUsuario = await tx.usuarios.create({
        data: {
          email: DTOUsuario.email,
          senha: senhaHash,
        },
      });

      const novoEndereco = await tx.enderecos.create({
        data: {
          cep: DTOPaciente.endereco.cep,
          logradouro: DTOPaciente.endereco.logradouro,
          numero: DTOPaciente.endereco.numero,
          bairro: DTOPaciente.endereco.bairro,
          cidade: DTOPaciente.endereco.cidade,
          estado: DTOPaciente.endereco.estado,
          complemento: DTOPaciente.endereco.complemento,
          apelido_endereco: DTOPaciente.endereco.apelido_endereco,
        },
      });

      let dadosPaciente;
      if (DTOPaciente.e_titular) {
        // Paciente que se cadastrou é titular, portanto inserimos o nome do paciente e deixamos o campo "nome_titular" como null.
        dadosPaciente = {
          nome_paciente: DTOPaciente.nome_paciente,
          cpf: DTOPaciente.cpf,
          e_titular: true,
          nome_titular: null,
        };
      } else {
        dadosPaciente = {
          // Paciente cadastrado não é titular, então salvamos o nome do paciente e o nome do seu responsável.
          nome_paciente: DTOPaciente.nome_paciente,
          cpf: DTOPaciente.cpf,
          e_titular: false,
          nome_titular: DTOPaciente.nome_titular,
        };
      }

      const novoPaciente = await tx.pacientes.create({
        data: {
          usuarios_id_usuario: novoUsuario.id_usuario,
          enderecos_id_endereco: novoEndereco.id_endereco,
          ...dadosPaciente,
          data_nascimento: new Date(DTOPaciente.data_nascimento),
          nivel_tea: DTOPaciente.nivel_tea,
        },
      });

      await tx.telefones.create({
        data: {
          usuarios_id_usuario: novoUsuario.id_usuario,
          ddd: DTOPaciente.telefone.ddd,
          numero: DTOPaciente.telefone.numero,
          tipo: DTOPaciente.telefone.tipo,
        },
      });

      const { senha, ...usuarioSeguro } = novoUsuario;
      return { usuario: usuarioSeguro, paciente: novoPaciente };
    });
  }
}
