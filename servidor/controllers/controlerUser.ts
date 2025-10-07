import { Request, Response } from "express";
import dotenv from "dotenv";
import { items } from "../Dto/User";
import productos from "../repositories/repoProductos";

dotenv.config();

class metodosProductos {

  static async createProduct(req: Request, res: Response) {
    const { nombre, precio, stock } = req.body;
    try {    
      const result = await productos.createProduct(new items(nombre, precio, stock));

      res.status(200).json({
        message: "Producto creado correctamente",
        result
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al crear el producto",
        error
      });
    }
  }

  static async ventas(req: Request, res: Response) {
    try {
      const result = await productos.ventasTotales();

      res.status(200).json({
        message: `Ventas totales obtenidas corresonde a ${result[0].totalVentas}`,
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


