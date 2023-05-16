import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import cors from "cors";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();
//configurar cors
const whiteList = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Error en cors"));
    }
  },
};
app.use(
  cors({
    origin: "*",
  })
);
//Routing
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareaRoutes);

const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//socketio
import { Server, Socket } from "socket.io";

const io = new Server(servidor, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("conectado a socket.io");

  //definir eventos
  socket.on("abrir proyecto", (proyecto) => {
    socket.join(proyecto);
  });

  socket.on("nueva tarea", (tarea) => {
    const proyecto = tarea.proyecto;
    socket.to(proyecto).emit("tarea agragada", tarea);
  });
  socket.on("eliminar tarea", (tarea) => {
    const proyecto = tarea.proyecto;
    socket.to(proyecto).emit("tarea eliminada", tarea);
  });
});
