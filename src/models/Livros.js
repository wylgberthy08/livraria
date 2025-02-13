import mongoose from 'mongoose';
import {autorSchema} from '../models/Autor.js';

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco:{ type: Number},
    numeroPaginas: { type: Number },
    autor:autorSchema
}, { versionKey: false });

const livros = mongoose.model('livros', livroSchema);

export default livros;