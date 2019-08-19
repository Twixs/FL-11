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

console.log(charmander.getType());
console.log(charmander.getType() === charmeleon.getType());
console.log(charmeleon.getType() === charizard.getType());

console.log(charmander.evolve().constructor === Charmeleon);
console.log(charmeleon.evolve().constructor === Charizard);

console.log(charmander.getSpecie());
console.log(charmeleon.getSpecie());
console.log(charizard.getSpecie() === charmeleon.getSpecie());

console.log(charmander.canFly());
console.log(charmander.canFly() === charmeleon.canFly());
console.log(charizard.canFly());


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
console.log(pichu.getPokemonType());

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType());
console.log(pikachu.constructor === Pikachu);

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType());
console.log(raichu.constructor === Raichu);

const raichu2 = raichu.evolve();
console.log(raichu2 === raichu);


function Squirtle(){
	this.type = 'Water';
	this.specie = 'Turtle Pokémon';
	this.pokemon = 'Squirtle';
}
Squirtle.prototype = Object.create(Pokemon.prototype);
Squirtle.prototype.constructor = Squirtle;
Squirtle.prototype.evolve = function() {
	return new Wartortle();
}
Squirtle.prototype.attack = function() {
	return `${this.pokemon} has just given you a Skull Bash!`;
}

function Wartortle(){
	Squirtle.call(this);
	this.pokemon = 'Wartortle';
}
Wartortle.prototype = Object.create(Squirtle.prototype);
Wartortle.prototype.constructor = Wartortle;
Wartortle.prototype.evolve = function() {
	return new Blastoise();
}

function Blastoise(){
	Wartortle.call(this);
	this.pokemon = 'Blastoise';
}
Blastoise.prototype = Object.create(Wartortle.prototype);
Blastoise.prototype.constructor = Blastoise;
Blastoise.prototype.evolve = function() {
	return this;
}

const squirtle = new Squirtle();
console.log(squirtle.getPokemonType());

const wartortle = squirtle.evolve();
console.log(wartortle.getPokemonType());
console.log(wartortle.attack());

const blastoise = wartortle.evolve();
console.log(blastoise.getPokemonType());
console.log(blastoise.constructor === Blastoise);