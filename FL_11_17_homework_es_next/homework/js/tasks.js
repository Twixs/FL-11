function maxElement(arr){
	return arr.reduce((el1, el2) => {
		return Math.max(el1, el2);
	})
}

const array = [1,2,3,4,56,7,8,76,5,241,5,356,567,2];
console.log(maxElement(array));


function copyArray(arr){
	const [...copy] = arr;
	return copy;
}

const arrayToCopy = [1,2,3];
const copiedArray = copyArray(arrayToCopy);
console.log(arrayToCopy,copiedArray);
console.log(arrayToCopy === copiedArray);


function addUniqueId(obj){
	const {...tempObj} = obj;
	const randomId = Math.floor(Math.random() * 1000);
	Object.defineProperty(tempObj, 'id', {
		value: Symbol(randomId),
		writable: false,
		enumerable: true,
		configurable: true
	});
	return tempObj;
}

const obj = {name: 123};
const anotherObj = addUniqueId(obj);
console.log(obj, anotherObj);
console.log(obj === anotherObj);


function regroupObj(obj){
	let {name, details: {id, age, university}} = obj;
	return {
		university: university,
		user: {
			age: age,
			firstName: name,
			id: id
		}
	}
}

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};
console.log(regroupObj(oldObj));


function findUniqueElements(arr){
	let setUnique = new Set();
	let toArray = [];
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		setUnique.add(arr[i]);
	}
	for (let value of setUnique) {
		toArray[j] = value;
		j++
	}
	return toArray;
}

const fullArray = [1,1,2,23,5,7,4,9,23,1,1,1,4,4];
console.log(findUniqueElements(fullArray));


function hideNumber(phone) {
	return phone.slice(-4).padStart(10, '*');
}

const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber));


function add(a = 0, b = 0) {
	if (!a || !b) {
        throw new Error('Missing parameter');
    }
	return a + b;
}

console.log(add(4,5));
//console.log(add(5));

function fetchAPIwithPromises(url){
	const array = [];
	return fetch(url)
	.then(request => request.json())
	.then(text => {
		for (let i = 0; i < text.length; i++) {
			array[i] = text[i].name;
		}
		array.sort();
		console.log(array);
	})
	.catch(err => {
		console.log('Failed on', err);
	});
}

fetchAPIwithPromises('https://jsonplaceholder.typicode.com/users');


async function fetchAPIwithAsync(url){
	try {
		const array = [];
		const request = await fetch(url);
		const text = await request.json();
		for (let i = 0; i < text.length; i++) {
			array[i] = text[i].name;
		}
		array.sort();
		console.log(array);
	}
	catch (err) {
		console.log('Failed on', err);
	}
}

fetchAPIwithAsync('https://jsonplaceholder.typicode.com/users');