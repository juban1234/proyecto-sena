import { user } from "../Dto/User";
import generateHash from "../helper/hash";
import repoUsuarios from "../repositories/repoUsuarios";
import bcrypt from "bcryptjs";

class usuarioServi {
    
    static async registerUsuario(usuario: user) {
        usuario.password = await generateHash(usuario.password!);
        return await repoUsuarios.regirter(usuario);
    }

    static async login(usuario:string, password:string) {

        const result = await repoUsuarios.usuario(usuario);

        const isPasswordValid = await bcrypt.compare(password,  result.password);

        if (isPasswordValid) {
            return { logged: true, status: "Successful authentication", id: result.id_usuario};
        }

        return 
    }
}

export default usuarioServi;