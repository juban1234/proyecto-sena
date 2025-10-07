import { Request, Response } from "express";
import usuarioServi from "../../services/usuarioServi";
import { Login ,Usuario } from "../../Dto/User";
import {generateAccessToken,generateRefreshToken,actualizarToken} from '../../Helpers/generateToken';
import dotenv from "dotenv";


dotenv.config();

export const login = async (req: Request, res: Response) => {
  try {
    const { usuario, password } = req.body;

    const loginResult = await usuarioServi.login(new Login(usuario, password));

    if (!loginResult.logged) {
      return res.status(401).json({ status: loginResult.status });
    }

    const payload = { id: loginResult.id, rol: loginResult.rol };
    const Rol = loginResult.rol;

    const accessToken = generateAccessToken(payload);
    const refreshToken = await generateRefreshToken(payload);

    await actualizarToken({ id: payload.id, token: refreshToken });

    return res.status(200).json({
      status: loginResult.status,
      accessToken,
      refreshToken,
    });

  } catch (error) {
    console.error("❌ Error en login:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
};

export const register = async (req: Request, res: Response) => {
    try {
      const {nombre,password } = req.body;

      const registerUser = await usuarioServi.register(
        new Usuario (nombre,password )
      );
  
      return res.status(201).json({ 
        status: "register ok" ,
        registerUser
      });

    } catch (error: any) {
      console.error("❌ Error al registrar usuario:", error);
  
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage });
      }
  
      return res.status(500).json({ error: "Error en el servidor" });
    }
};




