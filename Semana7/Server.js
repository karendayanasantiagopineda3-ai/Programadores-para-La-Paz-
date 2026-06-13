const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let reportes = [];

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.post('/reportes', (req, res) => {
  const nuevoReporte = req.body;
  reportes.push(nuevoReporte);
  res.status(201).json({ mensaje: 'Reporte guardado', reporte: nuevoReporte });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
