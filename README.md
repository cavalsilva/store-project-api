
# Node Store Project API
Aplicação para armazenar projetos e suas tarefas do zero utilizando Express, onde contém middlewares de validação e de contador de requisições.

Segue abaixo as rotas da API e detalhes de utilização:

## Incluir um projeto
POST: /projects
**id** é o idenficador do projeto e **title** o nome do projeto.

    { 
    	"id": "1", 
    	"title": "Novo projeto" 
    }

## Incluir uma tarefa a um projeto existente
POST: /projects/:id/tasks
**:id** deve passar o id de um projeto existente e no body a propriedade **title** que deve ser o nome da tarefa.


    { 
    	"title":  "Nova tarefa" 
    }

## Atualizar título de um projeto
PUT: /projects/:id
**:id** deve passar o id de um projeto existente e no body a propriedade **title** o novo título do projeto.

    { 
    	"title": "Nova API" 
    }

## Recuperar todos os projetos cadastrados
GET: /projects

## Excluir um projeto
DEL: /projects/:id

**:id** deve passar o id de um projeto existente
