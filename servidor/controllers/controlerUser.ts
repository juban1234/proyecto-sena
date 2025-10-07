import { Request, Response } from "express";
import dotenv from "dotenv";
import { user } from "../Dto/User";
import productos from "../repositories/repoUsuarios";
import usuarioServi from "../servise/usuarioServi";

dotenv.config();

class metodosProductos {

  static async register(req: Request, res: Response) {
    const { usuario,password} = req.body;
    try {

      const registerUser = await usuarioServi.registerUsuario(
        new user (usuario,password )
      );

      res.status(200).json({
        message: "Producto creado correctamente",
        registerUser
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al crear el producto",
        error
      });
    }
  }

  static async usuarios(req: Request, res: Response) {
    try {
      const result = await productos.usuario();

      res.status(200).json({
        message: `usuarios del sistema ${result[0]}`,
      });}
    catch (error) {
      res.status(500).json({
        message: "Error en el sistema",
        error
      });
    }
  }

  static async login(req: Request, res: Response) {

    const { usuario,password} = req.body;

    try {
      const result = await usuarioServi.login(usuario,password);

      res.status(200).json({
        message: `Ventas totales obtenidas corresonde a ${result}`,
      });}
    catch (error) {
      res.status(500).json({
        message: "Error al obtener las ventas totales",
        error
      });
    }
  }
}

export default metodosProductos;


