import db from "../configs/config";

class productos {
    static async createProduct(datos:any) {
        const sql = 'INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)';
        const params = [datos.nombre, datos.precio, datos.stock];
        const [rows]: any = await db.execute(sql, params);
        return rows;
    }

    static async ventasTotales() {
        const sql = 'SELECT * FROM usuarios';
        const [rows]: any = await db.execute(sql);
        return rows;
    }

}

export default productos;