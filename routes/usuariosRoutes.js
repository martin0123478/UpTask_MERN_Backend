import express from "express";
import { registrar } from "../controllers/usuarioController.js";
const router = express.Router();

//Autenticación, Registro y Confirmación de Usuarios
router.post("/", registrar);
export default router;