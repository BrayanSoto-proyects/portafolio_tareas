// Backend/server.js
// API con Node.js + Express para consultar tareas desde MongoDB.

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || "*"
}));
app.use(express.json());

const tareaSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
    unique: true
  },
  Titulo: {
    type: String,
    required: true
  },
  URL: {
    type: String,
    required: true
  }
}, {
  collection: "tareas"
});

const Tarea = mongoose.model("Tarea", tareaSchema);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado correctamente a MongoDB"))
  .catch((error) => console.error("Error al conectar a MongoDB:", error.message));

// Endpoint principal solicitado: GET /api/tareas
app.get("/api/tareas", async (req, res) => {
  try {
    const tareas = await Tarea.find().sort({ ID: 1 });
    res.json(tareas);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener las tareas",
      error: error.message
    });
  }
});

app.get("/", (req, res) => {
  res.send("API del portafolio de tareas funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
