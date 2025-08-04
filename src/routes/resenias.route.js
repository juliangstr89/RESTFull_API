import { Router } from 'express';
const app = Router();

app.get('/resenias', (req, res) => {
  res.send('Obtener todas las reseñas');
});

app.get('/resenias/:id', (req, res) => {
  res.send(`Obtener reseña con ID ${req.params.id}`);
});

app.get('/resenias/libro/:id_libro', (req, res) => {
  res.send(`Obtener reseñas del libro con ID ${req.params.id_libro}`);
});

app.post('/resenias', (req, res) => {
  res.send('Crear nueva reseña');
});

app.put('/resenias/:id', (req, res) => {
  res.send(`Actualizar reseña con ID ${req.params.id}`);
});

app.delete('/resenias/:id', (req, res) => {
  res.send(`Eliminar reseña con ID ${req.params.id}`);
});

export default app;

