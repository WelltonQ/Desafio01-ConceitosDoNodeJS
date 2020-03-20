# Desafio 01
Primeiro desafio do Bootcamp GoStack 🚀

### Sobre:
- Aplicação para armazenar projetos e suas tarefas do zero utilizando Express.
- [Desafio](https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/README.md#desafio-01-conceitos-do-nodejs)

<hr/>

### Ferramentas utilizadas:
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [Insomnia](https://insomnia.rest/)

<hr/>

### Como usar:
- Primeiro clone o repositório ou faça download;
- Abra a pasta do projeto e execute no terminal:
  > $ yarn install
  
  > $ yarn dev
  
- No insomnia, crie uma requisição (get, post, put, delete) e basta copiar as seguintes rotas:

  Método GET (listar projetos): http://localhost:3000/projects

  Método DELETE (deletar projeto): http://localhost:3000/projects/1

  Método POST (criar projetos): http://localhost:3000/projects, Colocar no body: { "id": "2", "title": "Novo projeto" }

  Método POST (criar tarefas): http://localhost:3000/projects/1/tasks, Colocar no body: { "title": "Novo tarefa" }

  Método PUT (atualizar projeto): http://localhost:3000/projects/1, Colocar no body: { "title": "altera titulo" }
  
![0](https://user-images.githubusercontent.com/12499627/77180260-6b91f900-6aa8-11ea-92cd-1cd3d1d18681.jpg)

