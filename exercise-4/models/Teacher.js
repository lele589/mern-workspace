const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El campo "nombre" es obligatorio']
    },
    apellidos: {
        type: String,
        minlength: 4,
        maxlength: 10
    },
    especialidad: {
        type: String,
        required: [true, 'El campo "especialidad" es obligatorio']
    },
    edad: {
        type: Number,
        minimum: 16,
        required: [true, 'El profesor debe tener al menos 16 años']
    }
});

module.exports = mongoose.model('teacher', teacherSchema);