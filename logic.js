var allPokemon = 
{
	"bulbasaur":
  {
  	"learnableMoves": ["Vine Whip", "Solarbeam", "Giga Drain", "Sludge Bomb"],
    "abilities": ["Overgrow", "Chlorophyl"],
    "moves": ["", "", "", ""],
    "ability": "Overgrow",
    "baseStats":
    {
    	"hp": 45,
      "attack": 49,
      "defense": 49,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    }
  },
  "ivysaur":
  {
  	
  },
  "pikachu":
  {
  	"learnableMoves": ["Thunder Shock", "Thunderbolt", "Volt Tackle", "Quick Attack"],
    "abilities": ["Static", "Lightning Rod"],
    "baseStats":
    {
    	"hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    }
  }
};

var allMoves =
{
	"Vine Whip":
  {
  	"Power": 40,
    "Type": "grass",
    "Category": "physical"
  },
  "Solarbeam":
  {
  	"Power": 40,
    "Type": "grass",
    "Category": "physical"
  },
  "Giga Drain":
  {
  	"Power": 40,
    "Type": "grass",
    "Category": "physical"
  },
  "Sludge Bomb":
  {
  	"Power": 40,
    "Type": "poison",
    "Category": "physical"
  },
  "Thunder Shock":
  {
  	"Power": 40,
    "Type": "electric",
    "Category": "physical"
  },
  "Thunderbolt":
  {
  	"Power": 40,
    "Type": "electric",
    "Category": "physical"
  },
  "Volt Tackle":
  {
  	"Power": 40,
    "Type": "electric",
    "Category": "physical"
  },
  "Quick Attack":
  {
  	"Power": 40,
    "Type": "normal",
    "Category": "physical"
  }
}

let pokemonArray = Object.keys(allPokemon);
let pokemon1;
let pokemon2;
let clickedMove;

function getViewport()
{
	console.log(window.innerHeight);
}

function adjustSizes()
{
	console.log("The width is: " + document.getElementById("firstPokemonMove1").offsetWidth);
  console.log("The width of the container div is: " + document.getElementById("containerDiv").offsetWidth);
  

	let x = document.getElementById("firstPokemon").offsetWidth - 2;
  document.getElementById("firstPokemon").style.width = x + "px";
  document.getElementById("secondPokemon").style.width = x + "px";
  
  
  let y = document.getElementById("firstPokemonMove1").offsetWidth - 3;
  document.getElementById("firstPokemonMove1").style.width = y + "px";
  document.getElementById("secondPokemonMove1").style.width = y + "px";
  document.getElementById("firstPokemonMove2").style.width = y + "px";
  document.getElementById("secondPokemonMove2").style.width = y + "px";
  document.getElementById("firstPokemonMove3").style.width = y + "px";
  document.getElementById("secondPokemonMove3").style.width = y + "px";
  document.getElementById("firstPokemonMove4").style.width = y + "px";
  document.getElementById("secondPokemonMove4").style.width = y + "px";
  
  console.log("The width is now: " + document.getElementById("firstPokemonMove1").offsetWidth);
  
  let i = 0;
  while(i<pokemonArray.length)
  {
  	let para = document.createElement("a");
    para.innerText = pokemonArray[i];
    para.onclick = "leftPokemonSelection(para.innerText)";
    document.getElementById("myDropdown").appendChild(para);
    let paraa = document.createElement("a");
    paraa.innerText = pokemonArray[i];
    document.getElementById("yourDropdown").appendChild(paraa);
    i++;
  }
}




function leftPokemonSelection(pokemon)
{
	console.log();
	//document.getElementById("firstPokemonMove1")
}

function damageCalculation(pokemon, move, opokemon)
{
	let level = pokemon.level;
  level *= 2;
  level /= 5;
  level += 2;
  //let lv2 = pokemon2.level
  let attack;
  let movePower = move.power;
  if (move.category == "physical")
 		attack = pokemon.stats.attack;
  else
  	attack = pokemon.stats.specialAttack;
    
  let damage = level * attack * movePower;
  damage /= 50;
  damage += 2;
  
  /* ALL OTHER CHECKS
  
  Targets - Multi hitting moves have a 0.75x multiplier in double battles
  
  Weather - Water type moves get a 1.5x boost in rain, Fire 0.5x and vice versa in Sun
  
  Critical - 1.5x damage for a crit and ignores damage debuffs of the attacker and defensive buffs of the opponent
  
  STAB - 1.5x damage for a move that matches the type(s) of the attacker
  
  Type - 2x damage for super effective moves, 0.5x damage for not very effective damage, 0x for immunities 
  			 (Can be 0.25x or 4x for doubly super effective or not very effective moves)
  
  Burn - 0.5x damage on physical attacks if the user is burned. Guts pokemon instead get a 1.5x buff, facade gets a 2x buff
  
  Other - Any other damage multiplier that may apply such as with abilities like Steely Spirit or Beads of ruin
  
  
  */
  
  
  
  
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function yourFunction() {
  document.getElementById("yourDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  else if (!event.target.matches('.dropdown-content')) {
    console.log("The inner content is: " + this.innerHTML);
  }
}