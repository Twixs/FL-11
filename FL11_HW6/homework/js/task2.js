let a = prompt('Enter the length for side A of the triangle', '');
let b = prompt('Enter the length for side B of the triangle', '');
let c = prompt('Enter the length for side C of the triangle', '');

if (parseFloat(a) < parseFloat(b) + parseFloat(c) &&
	parseFloat(b) < parseFloat(a) + parseFloat(c) &&
	parseFloat(c) < parseFloat(b) + parseFloat(a)) {
	if (a===b && b===c && c===a) {
		console.log('Equivalent triangle');
	} else {
		if (a===b || b===c || c===a) {
			console.log('Isosceles triangle');
		} else {
			console.log('Normal triangle');
		}
	}
} else {
	console.log('Triangle doesn’t exist');
}