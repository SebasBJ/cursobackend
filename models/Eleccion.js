import mongoose from 'mongoose';

const eleccionSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  fecha: { type: Date, default: Date.now },
  creacion: { type: Date, default: Date.now },
  activa: { type: Boolean, default: true },
});

export default mongoose.model("Eleccion", eleccionSchema);  