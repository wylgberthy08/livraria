# 📚 Livraria API

🚀 Um CRUD completo para gerenciamento de autores e livros, desenvolvido com **Node.js**, **Express** e **MongoDB**.

## 📌 Funcionalidades

- 📖 Cadastro, listagem, atualização e remoção de **livros**.
- ✍️ Cadastro, listagem, atualização e remoção de **autores**.
- 🔗 Integração com **MongoDB** para persistência de dados.

## 🛠 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para criação da API
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para interação com o MongoDB

## 📥 Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/livraria-api.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd livraria-api
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Configure as variáveis de ambiente (`.env`):
   ```sh
   DB_CONNECTION_STRING=""
   ```

## ▶️ Executando o Projeto

### Ambiente de Desenvolvimento
```sh
npm run dev
```

### Ambiente de Produção
```sh
npm start
```

## 📡 Rotas Disponíveis

### 📌 Autores

- **GET** `/autores` → Lista todos os autores.
- **GET** `/autores/:id` → Obtém detalhes de um autor.
- **POST** `/autores` → Cadastra um novo autor.
- **PUT** `/autores/:id` → Atualiza um autor existente.
- **DELETE** `/autores/:id` → Remove um autor.

### 📌 Livros

- **GET** `/livros` → Lista todos os livros.
- **GET** `/livros/:id` → Obtém detalhes de um livro.
- **POST** `/livros` → Cadastra um novo livro.
- **PUT** `/livros/:id` → Atualiza um livro existente.
- **DELETE** `/livros/:id` → Remove um livro.

## 🛠 Contribuição

1. Fork este repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona minha feature'`).
4. Envie para o repositório (`git push origin feature/minha-feature`).
5. Abra um **Pull Request**.

## 📜 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usá-lo e contribuir! 🎉

