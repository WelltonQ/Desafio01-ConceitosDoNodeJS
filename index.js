const express = require('express');

const server = express();

const projects = [];

// MIDDLEWARES

// Global
server.use(express.json());

function logRequests(req, res, next) {

  console.count("Número de requisições");

  return next();
}

server.use(logRequests);

//Local
function checkIdProject(req, res, next) {
  const { id } = req.params;

  const verifica = projects.find(e => e.id === id);

  if (!verifica) {
    return res.status(400).json({ error: "Project not found" });
  }

  return next();
}

// ROTAS

// Criar novo projeto
server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  

  projects.push({ id, title, tasks: [] });
  
  return res.json(projects);
});

// Listar todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Alterar título
server.put('/projects/:id', checkIdProject, (req, res) => {
  const {id} = req.params;
  const {title} = req.body;

  const project = projects.find(e => e.id === id);

  project.title = title;

  return res.json(project);
});

// Deletar projeto
server.delete('/projects/:id', checkIdProject, (req, res) => {
  const {id} = req.params;

  const projectIndex = projects.findIndex(e => e.id === id);
  
  projects.splice(projectIndex, 1);

  return res.send();
});

// Criar tarefas
server.post("/projects/:id/tasks", checkIdProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectIndex = projects.findIndex(e => e.id === id);

  projects[projectIndex].tasks.push(title);

  return res.json(projects);
});

server.listen(3000);