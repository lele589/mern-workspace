const mongoose = require('mongoose');

const mongoUrl = 'mongodb://127.0.0.1/aepi';

mongoose.connect(mongoUrl, { 
    useNewUrlParser: true, //# Esto se añade para evitar un warning en consola que sale con la última versión
    useUnifiedTopology: true //# Esto se añade para evitar un warning en consola que sale con la última versión
});