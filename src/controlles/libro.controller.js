import { Router } from 'express';
const app = Router();

app.get('/libros/disponibles', (req, res) => {
  res.send('Obtener libros con existencia disponible');
});

export default app;