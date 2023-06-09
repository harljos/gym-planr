const { Schema } = require("mongoose");

// schema for excercise
const excerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    muscle: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    }
});

module.exports = excerciseSchema;