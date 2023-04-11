import Usuario from "../models/Usuario.js";

const registrar = async (req, resp) => {
  try {
    const usuario = new Usuario(req.body);
    const usuarioAlmacenado = await usuario.save();
    resp.json(usuarioAlmacenado);
  } catch (error) {
    console.log(usuario);
  }
};

export { registrar };
