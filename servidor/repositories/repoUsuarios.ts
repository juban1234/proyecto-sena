import db from "../configs/config";
import { user } from "../Dto/User";

class repoUsuarios {
    static async regirter(datos:user) {
        const sql = 'INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)';
        const params = [datos.nombre, datos.password];
        
        const [rows]: any = await db.execute(sql, params);
        return rows;
    }

    static async usuario(usuario?:string) {
        const sql = 'SELECT * FROM usuarios where usuario = ?';
        const [rows]: any = await db.execute(sql,[usuario]);
        return rows;
    }

}

export default repoUsuarios;