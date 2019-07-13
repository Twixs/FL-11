function isInteger(a) {
	return a === parseInt(a,10);
}

console.log(isInteger(5));
console.log(isInteger(5.1));