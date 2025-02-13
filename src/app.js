import express from 'express';
import connectDatabase from './config/dbConnect.js';
import routes from '../src/routes/index.js'
const connection = await connectDatabase();

connection.on("error", (error) => console.error(error));
connection.once("open", () => console.log("Conectado ao MongoDB"));

const app = express();

routes(app);




app.delete('/livros/:id', (req, res) => {
    const index = getLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});

export default app;
