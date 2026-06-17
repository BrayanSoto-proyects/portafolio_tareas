// Backend/seed.js
// Inserta tareas de ejemplo en MongoDB.
// Ejecutar con: npm run seed

require("dotenv").config();
const mongoose = require("mongoose");
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const tareaSchema = new mongoose.Schema({
  ID: Number,
  Titulo: String,
  URL: String
}, {
  collection: "tareas"
});

const Tarea = mongoose.model("Tarea", tareaSchema);

const tareas = [
  {
    ID: 1,
    Titulo: "Juego de Dados",
    URL: "https://drive.google.com/drive/folders/15DknXSY1i-EUZq7KMXWpzv2Y5I17EJeE"
  },
  {
    ID: 2,
    Titulo: "Promedio de 3 calificaciones",
    URL: "https://drive.google.com/drive/folders/1UXpvQLd_N6eeeRIi8IK4JRMraSdCBRVF"
  },
  {
    ID: 3,
    Titulo: "Tablas de Multiplicar",
    URL: "https://drive.google.com/drive/folders/1nIluFExba0YM-uG0LttZXZHlW9q0ns3z"
  }
];

async function insertarDatos() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Tarea.deleteMany({});
    await Tarea.insertMany(tareas);
    console.log("Tareas insertadas correctamente en MongoDB");
  } catch (error) {
    console.error("Error al insertar tareas:", error.message);
  } finally {
    await mongoose.connection.close();
  }
}

insertarDatos();
