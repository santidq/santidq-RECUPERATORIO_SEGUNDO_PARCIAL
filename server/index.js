import express from "express";

//importamos las conexiones de las bases de datos
import {
  createMariadbConnection,
  createMongoConnection,
  createMysqlConnection,
} from "./connections/connectionsDb.js";

const app = express();

// Endpoint para probar la conexión con MongoDB
app.get("/mongodb", async (_req, res) => {
  try {
    await createMongoConnection();
    return res.send({
      msg: "Conectado Correctamente a MongoDB",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      msg: "Error de Conexion a MongoDB",
    });
  }
});

// Endpoint para probar la conexión con MYSQL
app.get("/mysql", async (_req, res) => {
  try {
    await createMysqlConnection();
    return res.send({
      msg: "Conectado Correctamente a MYSQL",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      msg: "Error de Conexion a MYSQL",
    });
  }
});

// Endpoint para probar la conexión con MariaDB
app.get("/mariadb", async (_req, res) => {
  try {
    await createMariadbConnection();
    return res.send({
      msg: "Conectado Correctamente a MariaDB",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      msg: "Error de Conexion a MariaDB",
    });
  }
});

// Si no existe la ruta devuelve un 404
app.use((_req, res, _next) => {
  return res.status(404).send({
    msg: "404 - No existe el endpoint establecido",
  });
});

app.listen(5000, () => {
  console.log("server running");
});
