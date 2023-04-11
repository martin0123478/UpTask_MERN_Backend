import express from "express";
import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
} from "../controllers/usuarioController.js";

const router = express.Router();

//Autenticación, Registro y Confirmación de Usuarios
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);

export default router;
