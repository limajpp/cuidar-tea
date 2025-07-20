import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { LoginController } from "../controllers/LoginController";

const usuarioRoutes = Router();
const usuarioController = new UsuarioController();
const loginController = new LoginController();

usuarioRoutes.post("/criarContaFamilia", (req, res) =>
  usuarioController.criarContaFamilia(req, res)
);
usuarioRoutes.post("/login",(req,res)=>
  loginController.login(req,res)  
);


export default usuarioRoutes;
