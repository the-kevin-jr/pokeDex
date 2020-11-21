const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");
const pokemonModel = require()

exports.scrape = async function(){
    await axios.get("https://pokemondb.net/pokedex/all")
        .then((res) => {
            if(res.status === 200){
                htmlData = res.data;
                const $ = cheerio.load(htmlData);
                const pokemon = [];
                $(".ent-name",'td' ).each(function(i, e){
                    pokemon[i] = $(this).text();
                })
                console.log(pokemon)
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .then(()=>{
            fs.writeFile('Pokedata.txt', htmlData, ()=>{
                console.log("File Written!");
            }), (err) => {
                console.log(err)
            }
        })
}