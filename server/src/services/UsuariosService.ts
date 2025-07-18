import {
  PrismaClient,
  pacientes_nivel_tea,
  telefones_tipo,
} from "../generated/prisma.ts";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface criarContaFamiliaDTO {
  email: string;
  senha: string;
  nome_titular?: string; // Nome do titular será inserido caso o paciente seja dependente.
  cpf: string; // CPF do paciente.
  telefone: {
    ddd: string;
    numero: string;
    tipo: telefones_tipo;
  };
  endereco: {
    // Endereço do paciente para atendimento domiciliar.
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    complemento?: string;
    apelido_endereco?: string;
  };
  e_titular: boolean; // Se for "true", o paciente com TEA é quem fez o cadastro. Caso contrário, ele é dependente e o campo "nome_titular" deixa de ser null.
  nome_paciente: string;
  data_nascimento: string;
  nivel_tea: pacientes_nivel_tea; // Devido à formatação do prisma, os valores aceitos aqui são: "N_VEL_1, N_VEL_2, N_VEL_3".
}

export class UsuarioService {
  public async criarContaFamilia(dados: criarContaFamiliaDTO) {
    const emailExistente = await prisma.usuarios.findUnique({
      where: { email: dados.email },
    });
    if (emailExistente) throw new Error("Este e-mail já está em uso.");

    const cpfExistente = await prisma.pacientes.findUnique({
      where: { cpf: dados.cpf },
    });
    if (cpfExistente) throw new Error("Este CPF já está cadastrado.");

    const senhaHash = await bcrypt.hash(dados.senha, 8);
    return prisma.$transaction(async (tx: any) => {
      const novoUsuario = await tx.usuarios.create({
        data: {
          email: dados.email,
          senha: senhaHash,
        },
      });

      const novoEndereco = await tx.enderecos.create({
        data: {
          cep: dados.endereco.cep,
          logradouro: dados.endereco.logradouro,
          numero: dados.endereco.numero,
          bairro: dados.endereco.bairro,
          cidade: dados.endereco.cidade,
          estado: dados.endereco.estado,
          complemento: dados.endereco.complemento,
          apelido_endereco: dados.endereco.apelido_endereco,
        },
      });

      let dadosPaciente;
      if (dados.e_titular) {
        // Paciente que se cadastrou é titular, portanto inserimos o nome do paciente e deixamos o campo "nome_titular" como null.
        dadosPaciente = {
          nome_paciente: dados.nome_paciente,
          cpf: dados.cpf,
          e_titular: true,
          nome_titular: null,
        };
      } else {
        dadosPaciente = {
          // Paciente cadastrado não é titular, então salvamos o nome do paciente e o nome do seu responsável.
          nome_paciente: dados.nome_paciente,
          cpf: dados.cpf,
          e_titular: false,
          nome_titular: dados.nome_titular,
        };
      }

      const novoPaciente = await tx.pacientes.create({
        data: {
          usuarios_id_usuario: novoUsuario.id_usuario,
          enderecos_id_endereco: novoEndereco.id_endereco,
          ...dadosPaciente,
          data_nascimento: new Date(dados.data_nascimento),
          nivel_tea: dados.nivel_tea,
        },
      });

      await tx.telefones.create({
        data: {
          usuarios_id_usuario: novoUsuario.id_usuario,
          ddd: dados.telefone.ddd,
          numero: dados.telefone.numero,
          tipo: dados.telefone.tipo,
        },
      });

      const { senha, ...usuarioSeguro } = novoUsuario;
      return { usuario: usuarioSeguro, paciente: novoPaciente };
    });
  }

  // Criação do método para login dos usuários

  public async login(email: string, senha: string) {

  }

}


