const express = require('express');
const server = express();

server.use(express.json());

// Middleware que controle a quantidade de requisições feitas
function logRequests(req, res, next) {
  console.count("Número de requisições");
  return next();
}

// Middleware que verifica se o projeto existe
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  req.id = id;

  return next();

}

server.use(logRequests);

const projects = [];

// Incluir um projeto
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(projects);
});

// Incluir uma tarefa
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { title } = req.body;

  const project = projects.find(p => p.id == req.id);

  project.tasks.push(title);

  return res.json(projects);
});

// Recuperar todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Atualizar título de um projeto
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { title } = req.body;

  const project = projects.find(p => p.id == req.id);

  project.title = title;

  return res.json(projects);
});

// Excluir um projeto
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const project = projects.find(p => p.id == req.id);

  projects.splice(project);

  return res.json(projects);
});

server.listen(3000);
