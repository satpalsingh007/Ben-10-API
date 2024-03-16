const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
    name: String,
    power: String,
    series: String,
    description: String,
    strength: Number,
    agility: Number,
    attack: Number,
    cost: Number,
    damage: Number,
    weaknesses: [String],
    strongAgainst: [String],
    additionalAbilities: [String],
    imageUrl: String,
});

const ben10 = mongoose.model("ben10", alienSchema);

module.exports = ben10;
