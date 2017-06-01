const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adSchema = new Schema({
    partner_id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    duration: {
        type: Number,
        required: true
    },
    ad_content: {
        type: String
    }
});



const ModelClass = mongoose.model('ads', adSchema);

module.exports = ModelClass;
