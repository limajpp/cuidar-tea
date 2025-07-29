import { Router } from "express";
import { ProfissionalController } from "../controllers/ProfissionaisController";
import validate from "../middlewares/validate";
import { authMiddleware } from "../middlewares/auth";
import upload from "../config/imgUpload";
import { criarGradeSchema } from "../validators/profissionaisValidator";
import { atualizarConvenioSchema } from "../validators/profissionaisValidator";
import { atualizarValorConsultaSchema } from "../validators/profissionaisValidator";
import { atualizarDescricaoSchema } from "../validators/profissionaisValidator";

const profissionaisRoutes = Router();
const profissionalController = new ProfissionalController();

/**
 * @swagger
 * tags:
 *   - name: Profissionais
 *     description: Endpoints para gerenciar perfis e agendas de profissionais
 */

/**
 * @swagger
 * /api/profissionais/atualizarHorarios:
 *   post:
 *     summary: Atualiza a grade de horários de um profissional
 *     tags: [Profissionais]
 *     description: Substitui a grade de horários de trabalho semanal do profissional logado. Requer autenticação.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 dia_semana:
 *                   type: integer
 *                   description: "1=Segunda, 2=Terça, ..., 7=Domingo"
 *                   example: 2
 *                 horario_inicio:
 *                   type: string
 *                   format: time
 *                   example: "09:00"
 *                 horario_fim:
 *                   type: string
 *                   format: time
 *                   example: "12:00"
 *     responses:
 *       '200':
 *         description: Grade de horários atualizada com sucesso.
 *       '401':
 *         description: Não autorizado (token inválido ou não fornecido).
 *       '403':
 *         description: Acesso negado (usuário não é um profissional).
 */
profissionaisRoutes.post(
  "/atualizarHorarios",
  authMiddleware,
  validate(criarGradeSchema),
  (req, res) => profissionalController.atualizarGradeDeTrabalho(req, res)
);

/**
 * @swagger
 * /api/profissionais/{id}/disponibilidade:
 *   get:
 *     summary: Busca os horários disponíveis de um profissional para uma data
 *     tags: [Profissionais]
 *     description: Retorna uma lista de horários disponíveis para um profissional em uma data específica.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do profissional a ser consultado.
 *       - in: query
 *         name: data
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: A data para a qual a disponibilidade é solicitada (formato AAAA-MM-DD).
 *         example: "2025-08-20"
 *     responses:
 *       '200':
 *         description: Lista de horários disponíveis.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 example: "09:00"
 *       '400':
 *         description: Parâmetros inválidos.
 */
profissionaisRoutes.get("/:id/disponibilidade", (req, res) =>
  profissionalController.buscarDisponibilidade(req, res)
);

/**
 * @swagger
 * /api/profissionais/foto-perfil:
 *   patch:
 *     summary: Atualiza a foto de perfil do profissional logado
 *     tags: [Profissionais]
 *     description: Faz o upload de uma nova imagem e atualiza a foto de perfil do profissional. Requer autenticação.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               foto:
 *                 type: string
 *                 format: binary
 *                 description: O arquivo de imagem a ser enviado.
 *     responses:
 *       '200':
 *         description: Foto de perfil atualizada com sucesso.
 *       '400':
 *         description: Nenhum arquivo enviado.
 *       '401':
 *         description: Não autorizado.
 */
profissionaisRoutes.patch(
  "/foto-perfil",
  authMiddleware,
  upload.single("foto"),
  (req, res) => profissionalController.atualizarFotoPerfil(req, res)
);

/**
 * @swagger
 * /api/profissionais/foto-perfil:
 *   delete:
 *     summary: Remove a foto de perfil do profissional logado
 *     tags: [Profissionais]
 *     description: Deleta a imagem do Cloudinary e limpa a URL no banco de dados. Requer autenticação.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Foto de perfil removida com sucesso.
 *       '401':
 *         description: Não autorizado.
 *       '403':
 *         description: Acesso negado.
 *       '404':
 *         description: Perfil de profissional não encontrado.
 */
profissionaisRoutes.delete("/foto-perfil", authMiddleware, (req, res) =>
  profissionalController.removerFotoPerfil(req, res)
);

/**
 * @swagger
 * /api/profissionais/convenio-status:
 *   patch:
 *     summary: Atualiza o status de aceite de convênio do profissional
 *     tags: [Profissionais]
 *     description: Permite que um profissional logado altere se ele aceita ou não convênios.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               aceita_convenio:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       '200':
 *         description: Status atualizado com sucesso.
 *       '400':
 *         description: "Dado inválido (ex: não é um booleano)."
 *       '401':
 *         description: Não autorizado.
 *       '403':
 *         description: Acesso negado.
 */
profissionaisRoutes.patch(
  "/convenio-status",
  authMiddleware,
  validate(atualizarConvenioSchema),
  (req, res) => profissionalController.atualizarStatusConvenio(req, res)
);

/**
 * @swagger
 * /api/profissionais/valor-consulta:
 *   patch:
 *     summary: Atualiza o valor da consulta do profissional
 *     tags: [Profissionais]
 *     description: Permite que um profissional logado altere o valor padrão de suas consultas.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               valor_consulta:
 *                 type: number
 *                 format: float
 *                 example: 150.50
 *     responses:
 *       '200':
 *         description: Valor da consulta atualizado com sucesso.
 *       '400':
 *         description: "Dado inválido (ex: não é um número)."
 *       '401':
 *         description: Não autorizado.
 *       '403':
 *         description: Acesso negado.
 */
profissionaisRoutes.patch(
  "/valor-consulta",
  authMiddleware,
  validate(atualizarValorConsultaSchema),
  (req, res) => profissionalController.atualizarValorConsulta(req, res)
);

/**
 * @swagger
 * /api/profissionais/descricao:
 *   patch:
 *     summary: Atualiza a descrição (biografia) do profissional
 *     tags: [Profissionais]
 *     description: Permite que um profissional logado altere sua descrição de perfil.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *                 example: "Sou um profissional com mais de 10 anos de experiência..."
 *     responses:
 *       '200':
 *         description: Descrição atualizada com sucesso.
 *       '400':
 *         description: Dado inválido.
 *       '401':
 *         description: Não autorizado.
 *       '403':
 *         description: Acesso negado.
 */
profissionaisRoutes.patch(
  "/descricao",
  authMiddleware,
  validate(atualizarDescricaoSchema),
  (req, res) => profissionalController.atualizarDescricao(req, res)
);

/**
 * @swagger
 * /api/profissionais/pacientes-ativos:
 *   get:
 *     summary: Lista os pacientes ativos de um profissional
 *     tags: [Profissionais]
 *     description: Retorna uma lista de todos os pacientes que possuem uma consulta com status 'AGENDADO' com o profissional logado. Requer autenticação.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de pacientes retornada com sucesso.
 *       '401':
 *         description: Não autorizado.
 *       '403':
 *         description: Acesso negado.
 */

profissionaisRoutes.get("/pacientes-ativos", authMiddleware, (req, res) =>
  profissionalController.listarPacientesAtivos(req, res)
);

export default profissionaisRoutes;
