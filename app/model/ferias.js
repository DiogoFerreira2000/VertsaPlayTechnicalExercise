import mongoose, { Schema } from "mongoose";

const SchemaFerias = new Schema(
  {
    nome: { type: String, required: true },
    data_inicio: { type: Date, required: true },
    data_fim: { type: Date, required: true },
    id_utilizador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Utilizador',
      required: true
    }
  },
  {
    versionKey: false,
    collection: "Ferias"
  }
);

const Ferias = mongoose.models.Ferias || mongoose.model("Ferias", SchemaFerias);

export default Ferias;
