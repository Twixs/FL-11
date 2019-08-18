function Pokemon(){}
Pokemon.prototype.getType = function() {
	return this.type;
}
Pokemon.prototype.getSpecie = function() {
	return this.specie;
}
Pokemon.prototype.getPokemonType = function() {
	return this.pokemon;
}

function Charmander(){
	this.type = 'Fire';
	this.specie = 'Lizard Pokémon';
	this.pokemon = 'Charmander';
	this.fly = false;
}
Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;
Charmander.prototype.evolve = function() {
	return new Charmeleon();
}
Charmander.prototype.canFly = function() {
	return this.fly;
}

function Charmeleon(){
	Charmander.call(this);
	this.specie = 'Flame Pokémon';
	this.pokemon = 'Charmeleon';
}
Charmeleon.prototype = Object.create(Charmander.prototype);
Charmeleon.prototype.constructor = Charmeleon;
Charmeleon.prototype.evolve = function() {
	return new Charizard();
}

function Charizard() {
	Charmeleon.call(this);
	this.pokemon = 'Charizard';
	this.fly = true;
}
Charizard.prototype = Object.create(Charmeleon.prototype);
Charizard.prototype.constructor = Charizard;
Charizard.prototype.evolve = function() {
	return this;
}

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmander.getType()); // Fire
console.log(charmander.getType() === charmeleon.getType()); // true
console.log(charmeleon.getType() === charizard.getType()); // true

console.log(charmander.evolve().constructor === Charmeleon); // true
console.log(charmeleon.evolve().constructor === Charizard); // true

console.log(charmander.getSpecie()); // Lizard Pokémon
console.log(charmeleon.getSpecie()); // Flame Pokémon
console.log(charizard.getSpecie() === charmeleon.getSpecie()); // true

console.log(charmander.canFly()); // false
console.log(charmander.canFly() === charmeleon.canFly()); // true
console.log(charizard.canFly()); // true


function Pichu(){
	this.type = 'Electric';
	this.specie = 'Mouse Pokémon';
	this.pokemon = 'Pichu';
}
Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;
Pichu.prototype.evolve = function() {
	return new Pikachu();
}

function Pikachu(){
	Pichu.call(this);
	this.pokemon = 'Pikachu';
}
Pikachu.prototype = Object.create(Pichu.prototype);
Pikachu.prototype.constructor = Pikachu;
Pikachu.prototype.evolve = function() {
	return new Raichu();
}

function Raichu(){
	Pikachu.call(this);
	this.pokemon = 'Raichu';
}
Raichu.prototype = Object.create(Pikachu.prototype);
Raichu.prototype.constructor = Raichu;
Raichu.prototype.evolve = function() {
	return this;
}

const pichu = new Pichu();
console.log(pichu.getPokemonType()); // Pichu

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType()); // Pikachu
console.log(pikachu.constructor === Pikachu); // true

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType()); // Raichu
console.log(raichu.constructor === Raichu); // true

const raichu2 = raichu.evolve();
console.log(raichu2 === raichu); // true