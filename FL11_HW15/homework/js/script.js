function Hamburger(type, calories){
	this.type = type;
	var _calories = calories;
	this.secretIngredient = arguments[2] || false;
	if (!this.secretIngredient) {
		var secretCounter = 0;
	} else {
		var secretCounter = 1;
		_calories += 100;
	}
	var cheeseCounter = 0;
	var tomatoCounter = 0;
	var biteCounter = 0;
	const notUsed = 0;
	const tomatoNotUsed = 2;
	this.getCalories = function(){
		return _calories;
	};
	this.setCalories = function(calories){
		_calories = calories;
	};
	this.addCheese = function(){
		if (biteCounter > notUsed) {
			throw new Error('Sorry, you cannot add cheese.');
		}
		if (cheeseCounter === notUsed) {
			_calories += 120;
			cheeseCounter++;
		} else {
			throw new Error('Sorry, you can add cheese only once.');
		}
	};
	this.addTomato = function(){
		if (biteCounter > notUsed) {
			throw new Error('Sorry, you cannot add tomato.');
		}
		if (tomatoCounter < tomatoNotUsed) {
			_calories += 20;
			tomatoCounter++;
		} else {
			throw new Error('Sorry, you can add tomato only twice.');
		}
	};
	this.addSecretIngredient = function(){
		if (biteCounter > notUsed) {
			throw new Error('Sorry, you cannot add secret ingredient.');
		}
		if (cheeseCounter === notUsed && tomatoCounter === notUsed){
			if (secretCounter === notUsed) {
				_calories += 100;
				secretCounter++;
			} else {
				throw new Error('Sorry, you can add secret ingredient only once.');
			}
		} else {
				throw new Error('Sorry, you can add secret ingredient only before another ingredients.');
			}
		};
	this.bite = function(){
		biteCounter++;
	}
	this.info = function(){
		if (secretCounter) {
			var messageSecret = 'with secret ingredient';
		} else {
			var messageSecret = 'without secret ingredient';
		}
		if (cheeseCounter) {
			var messageAboutCheese = 'with cheese';
		} else {
			var messageAboutCheese = 'without cheese';
		}
		return `${this.type} hamburger: ${messageSecret}, ${messageAboutCheese}, with ${tomatoCounter} tomato, is bitten ${biteCounter} time(s). Total calories: ${_calories}`;
	}
};

const myHamburger = new Hamburger('Classic', 600);

console.log(myHamburger);
console.log(myHamburger.info());
console.log('Adding Secret Ingredient...');
myHamburger.addSecretIngredient();
console.log('Adding Cheese...');
myHamburger.addCheese();
console.log('Adding Tomato...');
myHamburger.addTomato();
console.log('Bite it...');
myHamburger.bite();
console.log('Bite it once again...');
myHamburger.bite();
console.log(myHamburger.info());


const myHamburgerTwo = new Hamburger('Classic', 600, true);

console.log(myHamburgerTwo);
console.log(myHamburgerTwo.info());
console.log('Adding Tomato...');
myHamburgerTwo.addTomato();
console.log('Adding Tomato...');
myHamburgerTwo.addTomato();
console.log('Bite it...');
myHamburgerTwo.bite();
console.log(myHamburgerTwo.info());
console.log(myHamburgerTwo.addCheese());