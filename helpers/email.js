import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //información del email
  const info = await transport.sendMail({
    from: '"UpTask - Administrador e proyectos <cuentas@uptask.com>"',
    to: email,
    subject: "UpTask -  Comprueba tu cuenta",
    text: "Comprueba tu cuenta en UpTask",
    html: `
    
        <p>Hola: ${nombre} comprueba tu cuenta en Uptask</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el sigiente enlace:
        
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>
        </p>
    
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //información del email
  const info = await transport.sendMail({
    from: '"UpTask - Administrador e proyectos <cuentas@uptask.com>"',
    to: email,
    subject: "UpTask -  Restablece tu password",
    text: "Restablece tu password",
    html: `
    
        <p>Hola: ${nombre} has solicitado resetear tu password</p>
        <p>Sigue el sigiente enlace para generar un nuevo password:
        
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer password</a>
        </p>
    
    `,
  });
};
