import express from "express";
import prueba from "./prueba.js";
const app = express();
console.log(prueba);
app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto 4000");
});
