function Fighter(data) {
    this.getName = () => data.name;
    this.getDamage = () => data.damage;
    this.getHealth = () => data.hp;
    this.getAgility = () => data.agility;
    data.win = 0;
    data.loss = 0;
	this.attack = function(fighter) {
		const RAND_MIN = 0;
		const RAND_MAX = 100;
		let check = getRandom(RAND_MIN, RAND_MAX);
		if (check > fighter.getAgility()) {
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
		console.log(`Name: ${this.getName()}, Wins: ${data.win}, Losses: ${data.loss}`)
	}
	this.heal = function(hpInc) {
		data.hp += hpInc;
	}
	this.dealDamage = function(damage) {
		const DEAD = 0;
		data.hp -= damage;
		if (data.hp <= DEAD) {
			data.hp = 0
		}
	}
	this.addWin = () => data.win++;
	this.addLoss = () => data.loss++;
}

function battle(fighter1, fighter2) {
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