function reverseNumber(num) {
    let str ='';
	let stringNumber = num.toString();
    let firstEl= stringNumber < 0 ? 1 : 0;
    for (let i = stringNumber.length-1; i >= firstEl; i--) {
        str += stringNumber[i];
    }
	let reversed = num < 0 ? '-' + str : str;
    return parseInt(reversed);
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));