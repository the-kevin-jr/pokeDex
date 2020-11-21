const mongoose = require("mongoose");
const schema = mongoose.Schema;

var pokemonSchema = new schema({
    id: { type: Number },
    name: { type: String },
    type: [{ type: String }],
    total: { type: Number }, 
    hp: { type: Number }, 
    attack: { type: Number },
    def: { type: Number }, 
    specialAttack: { type: Number },
    specialDef: { type: Number }, 
    speed: { type: Number },
})

const Pokemon = mongoose.model("Pokemon", pokemonSchema);
exports.Pokemon = Pokemon;

exports.addPokemon = async function(id, name, type, total, hp, attack, def, specialAttack, specialDef, speed) {
    const newPokemon = new Pokemon({
        id: id,
        name: name,
        type: type,
        total: total, 
        hp: hp, 
        attack: attack,
        def: def, 
        specialAttack: specialAttack,
        specialDef: specialDef, 
        speed: speed,
    })

    await newPokemon.save();
}