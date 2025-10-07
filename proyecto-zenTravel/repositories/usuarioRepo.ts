import db from '../configs/config';
import bcrypt from "bcryptjs";
import {ProfileDto,Login,Usuario} from '../Dto/User';

class usuarioRepo {

  static async createUsuario( usuario:Usuario){
    const sql = 'CALL CrearUsuario(?, ?, ?, ?)';
    const values = [usuario.nombre,usuario.password];
    return db.execute(sql, values);
  }
    
  static async buscarUsuario(login: Login) {
    const sql = 'call loginUsuario(?)';
    const values = [login.email];
    const [rows]: any = await db.execute(sql, values);

    if (rows.length > 0) {
      const usuario = rows[0][0];

      if (!usuario.password) {
        throw new Error("El usuario no tiene contraseña almacenada");
      }

      // Compara la contraseña ingresada con el hash almacenado
      const isPasswordValid = await bcrypt.compare(login.password, usuario.password);

      if (isPasswordValid) {
        return { logged: true, status: "Successful authentication", id: usuario.id_usuario ,rol: usuario.rol};
      }

      return { logged: false, status: "Invalid password" };
 
    }
    return { logged: false, status: "Invalid username or password" };

  }

  static async cambiarContraseña(login: Login) {
    const [result] = await db.execute('CALL actualizar_contraseña(?, ?)', [login.email, login.password]);
    return result;
  }

}
export default usuarioRepo;
