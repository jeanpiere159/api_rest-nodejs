const express = require("express");
const { config } = require("dotenv");
const mongoose = require("mongoose");

config();

const bookRoutes = require("./routes/book.routes");
const app = express();

// Middleware para procesar JSON (reemplaza bodyParser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para registrar el cuerpo de la solicitud
app.use((req, res, next) => {
  console.log("Cuerpo de la solicitud:", req.body);
  next();
});

mongoose
  .connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB", error));

const db = mongoose.connection;

app.use("/books", bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
