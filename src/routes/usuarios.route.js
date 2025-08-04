import { Router } from 'express';
const app = Router();

app.get('/usuarios', (req, res) => {
  res.send('Obtener todos los usuarios');
});

app.get('/usuarios/:id', (req, res) => {
  res.send(`Obtener usuario con ID ${req.params.id}`);
});

app.post('/usuarios', (req, res) => {
  res.send('Crear nuevo usuario');
});

app.put('/usuarios/:id', (req, res) => {
  res.send(`Actualizar usuario con ID ${req.params.id}`);
});

app.delete('/usuarios/:id', (req, res) => {
  res.send(`Eliminar usuario con ID ${req.params.id}`);
});

export default app;

