import { Router } from "express";
import { AgendamentosController } from "../controllers/AgendamentosController";
import { authMiddleware } from "../middlewares/auth";
import validate from "../middlewares/validate";
import { criarAgendamentoSchema } from "../validators/agendamentosValidator";

const agendamentosRoutes = Router();
const agendamentosController = new AgendamentosController();

/**
 * @swagger
 * tags:
 *   - name: Agendamentos
 *     description: Endpoints para criar e gerenciar agendamentos
 */

/**
 * @swagger
 * /api/agendamentos:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [Agendamentos]
 *     description: Cria um novo agendamento para o paciente autenticado. Requer token de autenticação.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - profissionais_id_profissional
 *               - enderecos_id_endereco
 *               - data_horario_inicio
 *               - duracao_consulta_minutos
 *             properties:
 *               profissionais_id_profissional:
 *                 type: integer
 *                 description: O ID do perfil do profissional.
 *                 example: 1
 *               enderecos_id_endereco:
 *                 type: integer
 *                 description: O ID do endereço do consultório onde a consulta ocorrerá.
 *                 example: 1
 *               data_horario_inicio:
 *                 type: string
 *                 format: date-time
 *                 description: A data e hora de início da consulta no formato ISO 8601.
 *                 example: "2025-08-20T14:00:00"
 *               duracao_consulta_minutos:
 *                 type: integer
 *                 description: A duração da consulta em minutos.
 *                 example: 60
 *     responses:
 *       '201':
 *         description: Agendamento criado com sucesso. Retorna o objeto do agendamento.
 *       '400':
 *         description: Dados inválidos fornecidos.
 *       '401':
 *         description: Não autorizado (token inválido ou não fornecido).
 *       '403':
 *         description: Acesso negado (usuário logado não é um paciente).
 *       '409':
 *         description: Conflito (o horário solicitado já foi preenchido).
 */
agendamentosRoutes.post(
  "/",
  authMiddleware,
  validate(criarAgendamentoSchema),
  (req, res) => agendamentosController.criarAgendamento(req, res)
);

export default agendamentosRoutes;
