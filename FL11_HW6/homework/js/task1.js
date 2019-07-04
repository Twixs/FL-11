let a1 = prompt('Enter value A(x) = ', '');
let a2 = prompt('Enter value A(y) = ', '');
let b1 = prompt('Enter value B(x) = ', '');
let b2 = prompt('Enter value B(y) = ', '');
let c1 = prompt('Enter value C(x) = ', '');
let c2 = prompt('Enter value C(y) = ', '');

const two = 2;
let centerX = (parseInt(a1) + parseInt(b1))/two;
let centerY = (parseInt(a2) + parseInt(b2))/two;

let result = +c1 === centerX && +c2 === centerY ? console.log(true) : console.log(false);