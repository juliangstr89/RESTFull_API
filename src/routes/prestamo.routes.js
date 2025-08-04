import { Router } from 'express';
const app = Router();



app.get('/prestamos', (req, res) => {
  res.send('Obtener todos los préstamos');
});

app.get('/prestamos/:id', (req, res) => {
  res.send(`Obtener préstamo con ID ${req.params.id}`);
});

app.post('/prestamos', (req, res) => {
  res.send('Crear nuevo préstamo');
});

app.put('/prestamos/:id', (req, res) => {
  res.send(`Actualizar préstamo con ID ${req.params.id}`);
});

app.delete('/prestamos/:id', (req, res) => {
  res.send(`Eliminar préstamo con ID ${req.params.id}`);
});

export default app;
