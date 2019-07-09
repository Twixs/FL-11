let max = 8;
let min = 0;
let devider = 2;
let maxPrize = 100;
let prize = 0;

let confirmation = confirm('Do you want to play a game?');
start: while (confirmation) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    repeat: for (let j = 0; j < 3;) {
		let counter = 3-j;
		let userGuess = prompt('Choose a roulette pocket number from ' + min + ' to ' + max + 
								'\nAttempts left: ' + counter +
								'\nTotal prize: '+ prize +'$' +
								'\nPossible prize on current attempt: ' + maxPrize +'$','');
		if (parseInt(userGuess) === randomNumber && j === 0) {
			prize += maxPrize;
			maxPrize += maxPrize;
			max += devider*devider;
			confirmation = confirm('Congratulation, you won! Your prize is: ' +
										prize + '$. Do you want to continue?');
			if (!confirmation) {
				confirmation = false;
				break start;
			}
			j = 0;
			continue repeat;
		} else {
			if (parseInt(userGuess) === randomNumber && j === 1) {
				prize += maxPrize/devider;
				maxPrize += maxPrize;
				max += devider*devider;
				confirmation = confirm('Congratulation, you won! Your prize is: ' +
											prize +'$. Do you want to continue?');
				if (!confirmation) {
					confirmation = false;
					break start;
				}
				j = 0;
				continue repeat;
			} else {
				if (parseInt(userGuess) === randomNumber && j === 2) {
					prize += maxPrize/devider/devider;
					maxPrize += maxPrize;
					max += devider*devider;
					confirmation = confirm('Congratulation, you won! Your prize is: ' +
												prize +'$. Do you want to continue?');
					if (!confirmation) {
						confirmation = false;
						break start;
					}
					j = 0;
					continue repeat;
				} else {
					j++;
				}
			}
		}

	}
	alert('Thank you for your participation. Your prize is: ' + prize +'$');
	confirmation = confirm('Do you want to play again?');
	max = 8;
	prize = 0;
	maxPrize = 100;
}
alert('You did not become a billionaire, but can.');