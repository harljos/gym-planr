const { Schema, model } = require("mongoose");

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
    instruections: {
        type: String,
        required: true
    }
});

const Excercise = model("Excercise", excerciseSchema);

module.exports = Excercise;