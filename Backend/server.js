const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Importa el paquete cors

const app = express();
const upload = multer();

// Habilitar CORS para todas las solicitudes
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para manejar el envío de correos
app.post('/enviar-correo', upload.single('pdf'), async (req, res) => {
  console.log('Datos recibidos:', req.body);
  console.log('Archivo recibido:', req.file);

  const { email, title } = req.body;
  const pdf = req.file;

  if (!email || !pdf) {
    console.error('Faltan datos en la solicitud.');
    return res.status(400).send('Faltan datos.');
  }

  // Configurar el transporte de correo
  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'tallereslgr@yahoo.es',
      pass: 'uaaylobekvykjjup',
    },
  });

  const mailOptions = {
    from: 'tallereslgr@yahoo.es',
    to: email,
    subject: title,
    text: 'Buen día, adjunto cotización solicitada.\n\nAtentamente\n\nLuis Gustavo Rojas\nTALLERES LGR SAS\n3112319008-4596519',
    html: `
      <p>Buen día, adjunto cotización solicitada.</p>
      <p>Atentamente,</p>
      <p><strong>Luis Gustavo Rojas</strong><br>
      <em style="color: green;">TALLERES LGR SAS</em><br>
      3112319008-4596519</p>
    `,
    attachments: [
      {
        filename: `${title}.pdf`,
        content: pdf.buffer,
      },
    ],
  };

  try {
    console.log('Enviando correo...');
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado correctamente.');
    res.send('Correo enviado correctamente.');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send('Error al enviar el correo.');
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});