import express from 'express';
import routes from './routes';

const app = express();

// Middlewares globais
app.use(express.json());

// Rotas
app.use('/api', routes);

// Erro 404
app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada!' });
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno no servidor' });
});

export default app;
