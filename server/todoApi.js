import { Router } from 'express';

export const todoRoutes = () => {
  const todoRoutes = new Router();

  todoRoutes.get('/launches?limit=100', (_req, res) => {
    setTimeout(() => {
      res.json(res);
    }, 300);
  });

  return todoRoutes;
};
