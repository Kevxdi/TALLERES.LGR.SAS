const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = 4000; // Cambia el puerto aquí

app.use(cors());
app.use(express.json());

// Ruta para iniciar el servidor
app.post('/start-server', (req, res) => {
  const command = 'server-controller.js'; // Comando para iniciar el servidor

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al iniciar el servidor: ${error.message}`);
      return res.status(500).json({ message: 'Error al iniciar el servidor', error: error.message });
    }

    if (stderr) {
      console.error(`Error en el servidor: ${stderr}`);
      return res.status(500).json({ message: 'Error en el servidor', error: stderr });
    }

    console.log(`Servidor iniciado: ${stdout}`);
    res.status(200).json({ message: 'Servidor iniciado correctamente' });
  });
});

// Iniciar el controlador del backend
app.listen(port, () => {
  console.log(`Controlador del servidor escuchando en http://localhost:${port}`);
});