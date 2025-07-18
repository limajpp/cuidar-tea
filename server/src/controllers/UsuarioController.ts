import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuariosService";

const usuarioService = new UsuarioService();

export class UsuarioController {
  public async criarContaFamilia(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const dados = req.body;
      if (!dados.email || !dados.senha || !dados.cpf || !dados.nome_paciente) {
        return res
          .status(400)
          .json({ message: "Dados essenciais estão faltando." });
      }
      const resultado = await usuarioService.criarContaFamilia(dados);

      return res.status(201).json(resultado);
    } catch (error: any) {
      if (
        error.message.includes("já está em uso") ||
        error.message.includes("já está cadastrado")
      ) {
        return res.status(409).json({ message: error.message });
      }
      console.error(error);
      return res
        .status(500)
        .json({ message: "Ocorreu um erro interno no servidor." });
    }
  }
}
