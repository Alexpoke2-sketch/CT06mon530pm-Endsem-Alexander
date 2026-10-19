let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos = 100;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    textAlign(CENTER);
    textSize(20)
    for(let i =  0 ; i < pokemons.length ; i++){
        text(pokemons[i],100,yPos);
        yPos = yPos + 50;

    }
}