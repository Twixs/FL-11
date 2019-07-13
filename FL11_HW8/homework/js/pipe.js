function addOne(x){
			return x+1;
		}

function pipe(){
	let x = arguments[0];
	let inc = 0;
	for (let i = 1; i < arguments.length; i++) {
		x = addOne(x);
		inc = x;
	}
	return inc;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));