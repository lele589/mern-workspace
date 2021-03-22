const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: String,
    job: String,
    experience: Number,
    isWorking: Boolean
});

module.exports = mongoose.model('exercise3_client', clientSchema);