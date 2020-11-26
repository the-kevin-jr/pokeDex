const mongoose = require("mongoose");
const schema = mongoose.Schema;

var pokemonSchema = new schema({
    id: { type: Number },
    img: { type: String },
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

exports.addPokemon = async function(pokemon) {
    const newPokemon = new Pokemon({
        id: pokemon.id,
        img: pokemon.img,
        name: pokemon.name,
        type: pokemon.type,
        total: pokemon.total, 
        hp: pokemon.hp, 
        attack: pokemon.attack,
        def: pokemon.def, 
        specialAttack: pokemon.specialAttack,
        specialDef: pokemon.specialDef, 
        speed: pokemon.speed,
    })

    await newPokemon.save();
}