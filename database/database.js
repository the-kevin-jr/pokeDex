const mongoose = require("mongoose");

exports.connect = async function() {
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    await mongoose.connect('mongodb://localhost:27017/pokemonData', opts, () => {
        console.log("Connected To the database!");
    });
}

