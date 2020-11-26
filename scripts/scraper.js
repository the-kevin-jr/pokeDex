// Program to get pokemon data 

// Imports
const axios = require("axios");
const cheerio = require("cheerio");

const db = require("../database");

// Database Setup
db.database.connect();
db.pokemon.Pokemon.deleteMany({}).exec();


axios.get("https://pokemondb.net/pokedex/all")
    .then((res) => {
        if(res.status === 200){
            htmlData = res.data;
            const $ = cheerio.load(htmlData);
            $("tr", 'tbody').each(function(i, e) {
                var currentScope = this;
                temp = {
                    type: [],
                };
                temp.id = $(".infocard-cell-data", currentScope).text();
                temp.name = $(".cell-name", currentScope).text();
                temp.img = $(".icon-pkmn", currentScope).attr("data-src")
                $(".type-icon", currentScope).each(function(i, e) {
                    temp.type.push(($(this).text()));
                })
                temp.total = $(".cell-total", currentScope).text()
                $(".cell-num", currentScope).each(function(i, e) {
                    if(i == 1){
                        temp.hp = ($(this).text());
                    } else if(i == 2){
                        temp.attack = ($(this).text());
                    } else if(i == 3){
                        temp.def = ($(this).text());
                    }else if(i == 4){
                        temp.specialAttack = ($(this).text());
                    }else if(i == 5){
                        temp.specialDef = ($(this).text());
                    }else if(i == 6){
                        temp.speed = ($(this).text());
                    }
                });
                db.pokemon.addPokemon(temp);
            })
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .then(()=>{
        console.log("Successful!")
    })

