import express from "express";
import metodosProductos from "../controllers/controlerUser";

const router = express.Router();

router.post('/crearUsuario',metodosProductos.createProduct); 
router.get('/verUsuarios',metodosProductos.ventas)

export default router;

