import { Router } from "express";
const router = Router();

router.get('/prestamos/usuario/:id_usuario', (req, res) => {
  res.send(`Obtener préstamos del usuario con ID ${req.params.id_usuario}`);
});

app.get('/prestamos/libro/:id_libro', (req, res) => {
  res.send(`Obtener préstamos del libro con ID ${req.params.id_libro}`);
});


export default router;