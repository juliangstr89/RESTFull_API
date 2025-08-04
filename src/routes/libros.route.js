import { Router } from 'express';
const app = Router();


app.get('/libros', (req, res) => {
  res.send('Obtener todos los libros');
});

app.get('/libros/:id', (req, res) => {
  res.send(`Obtener libro con ID ${req.params.id}`);
});

app.post('/libros', (req, res) => {
  res.send('Crear nuevo libro');
});

app.put('/libros/:id', (req, res) => {
  res.send(`Actualizar libro con ID ${req.params.id}`);
});

app.put('/libros/:id/existencia', (req, res) => {
  res.send(`Actualizar existencia del libro con ID ${req.params.id}`);
});

app.delete('/libros/:id', (req, res) => {
  res.send(`Eliminar libro con ID ${req.params.id}`);
});

export default app; 