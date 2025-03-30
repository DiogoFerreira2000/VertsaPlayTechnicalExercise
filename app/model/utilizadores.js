import mongoose, { Schema } from "mongoose";

const SchemaUtilizadores = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telemovel: { type: String },
    cargo: { type: String, required: true },
    senha: { type: String, required: true },
    tipo: { type: String, enum: ["admin", "user"], default: "user" },
  }, 
  {
    collection: "Utilizadores" 
  }
);

const Utilizador = mongoose.models.Utilizador || mongoose.model("Utilizador", SchemaUtilizadores);

export default Utilizador;
