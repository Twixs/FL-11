let a1 = prompt('Enter value A(x) = ', '');
let a2 = prompt('Enter value A(y) = ', '');
let b1 = prompt('Enter value B(x) = ', '');
let b2 = prompt('Enter value B(y) = ', '');
let c1 = prompt('Enter value C(x) = ', '');
let c2 = prompt('Enter value C(y) = ', '');

const two = 2;
let centerX = (parseFloat(a1) + parseFloat(b1))/two;
let centerY = (parseFloat(a2) + parseFloat(b2))/two;

let result = parseFloat(c1) === centerX && parseFloat(c2) === centerY ? console.log(true) : console.log(false);