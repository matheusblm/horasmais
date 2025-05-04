import express from 'express';

const router = express.Router();

// Exemplo de rota
router.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo ao backend!' });
});

// Adicione outras rotas aqui

export default router;
