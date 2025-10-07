import express from "express";
import { login, register,  } from "../controllers/controlerUser/controlerUser";
import { validatorParams,validator } from "../middleware/register-validator";
import { refreshToken } from "../middleware/refreshToken";
const router = express.Router();

router.post('/login', login); // Funcional
router.post('/Register' ,validatorParams, validator, register); // Funcional
router.post('/RefreshToken', refreshToken) //funcional

export default router;

