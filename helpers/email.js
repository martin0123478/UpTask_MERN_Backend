import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9036bb1991cc17",
      pass: "4241df9b56464c",
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
