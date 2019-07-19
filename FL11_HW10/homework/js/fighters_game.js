// const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
// const myFighter = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});
function Fighter(data) {
	this.name = data['name'];
	this.damage = data['damage'];
	this.hp = data['hp'];
	this.agility = data['agility'];
	this.getName = function() {
		return this.name
	}
	this.getDamage = function() {
		return this.damage
	}
	this.getAgility = function() {
		return this.agility
	}
	this.getHealth = function() {
		return this.hp
	}
	this.attack = function(fighter) {
		const RAND_MIN = 0;
		const RAND_MAX = 100;
		let check = getRandom(RAND_MIN, RAND_MAX);
		if (check > fighter.agility) {
			console.log(`${this.getName()} make ${this.getDamage()} damage to ${fighter.getName()}`)
			fighter.dealDamage(this.getDamage());
		} else {
			console.log(`${this.getName()} attack missed`)
		}
		function getRandom(RAND_MIN, RAND_MAX) {
			const ONE = 1;
			return Math.floor(Math.random() * (RAND_MAX - RAND_MIN + ONE)) + RAND_MIN;
		}
	}
	this.logCombatHistory = function() {
		console.log(`Name: ${this.name}, Wins: ${this.win}, Losses: ${this.loss}`)
	}
	this.heal = function(hpInc) {
		this.hp += hpInc;
	}
	this.dealDamage = function(damage) {
		const dead = 0;
		this.hp -= damage;
		if (this.hp <= dead) {
			this.hp = 0
		}
	}
	this.addWin = function() {
		this.win++;
		return this.win
	}
	this.addLoss = function() {
		this.loss++;
		return this.loss
	}
}

function battle(fighter1, fighter2) {
	fighter1.win = 0;
	fighter1.loss = 0;
	fighter2.win = 0;
	fighter2.loss = 0;
	const DEAD = 0;
	if (fighter1.getHealth() === DEAD) {
		return `${fighter1.getName()} is dead and can't fight.`
	} else {
		if (fighter2.getHealth() === DEAD) {
			return `${fighter2.getName()} is dead and can't fight.`
		}
	}
	let notDead = true;
	start: while (notDead) {
		fighter1.attack(fighter2);
		if (fighter2.getHealth()!== DEAD) {
			fighter2.attack(fighter1);
			if (fighter1.getHealth()!== DEAD) {
				continue start;
			} else {
				fighter2.addWin();
				fighter1.addLoss();
				notDead = false;
			}
		} else {
			fighter1.addWin();
			fighter2.addLoss();
			notDead = false;
		}
	}
	
}