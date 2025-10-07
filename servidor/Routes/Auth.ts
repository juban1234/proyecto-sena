import express from "express";
import metodosProductos from "../controllers/controlerUser";

const router = express.Router();

router.post('/crearUsuario',metodosProductos.register); 
router.get('/verUsuarios',metodosProductos.usuarios)
router.post('/login',metodosProductos.login)

export default router;

