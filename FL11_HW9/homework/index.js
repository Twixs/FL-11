function getNumbers(string){
	let numbers = new Array();
	for (let i = 0,j = 0; i < string.length; i++) {
		if (!isNaN(string[i])) {
			numbers[j]=string[i];
			j++;
		}
	}
	return numbers;
}


function findTypes(){
	let counterForString = 0;
	let counterForNumber = 0;
	let counterForBoolean = 0;
	let counterForObjects = 0;
	let counterForUndef = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === 'string') {
			counterForString++;
		} else {
			if (typeof arguments[i] === 'number') {
				counterForNumber++;
			} else {
				if (typeof arguments[i] === 'boolean') {
					counterForBoolean++;
				} else {
					if (typeof arguments[i] === 'undefined') {
						counterForUndef++;
					} else {
						counterForObjects++;
					}
				}
			}
		}
	}
	console.log({
	'string':  counterForString,
	'number': counterForNumber,
	'boolean': counterForBoolean,
	'undefined': counterForUndef,
	'object': counterForObjects
});
}


const value = 3;
function executeforEach(array, show) {
	for (let i = 0; i < array.length; i++) {
		show(array[i]);
	}
}
function show(el) {
	console.log(el)
}


function mapArray(array, increment) {
	for (let i = 0; i < array.length; i++) {
		array[i] = increment(array[i]);
	}
	executeforEach(array, show);
	return array;
}
function increment(el) {
	return el + value
}


function filterArray(array, filter) {
	let filteredArray = new Array();
	for (let i = 0, j = 0; i < array.length; i++) {
		if (filter(array[i])) {
			filteredArray[j] = array[i];
			j++;
		}
	}
	executeforEach(filteredArray, show);
	return filteredArray;
}
function filter(el) {
	return el > value
}


function showFormattedDate(date){
	let year = date.getFullYear();
	let month = date.getMonth();
	switch(month.toString()) {
		case '0':
			month='Jan'
			break;
		case '1':
			month='Feb'
			break;
		case '2':
			month='Mar'
			break;
		case '3':
			month='Apr'
			break;
		case '4':
			month='May'
			break;
		case '5':
			month='Jun'
			break;
		case '6':
			month='Jul'
			break;
		case '7':
			month='Aug'
			break;
		case '8':
			month='Sep'
			break;
		case '9':
			month='Oct'
			break;
		case '10':
			month='Nov'
			break;
		case '11':
			month='Dec'
			break;
		default:
			console.log('Unknown month value');
			break;
	}
	let day = date.getDate();
	console.log('Date: '+month+' '+day+' '+year);
}


function canConvertToDate(date){
	let dat = new Date(date);
	let monthsAmount = 12;
	let daysAmount = 31;
	if (dat.getMonth() < monthsAmount) {
		if (dat.getDate() < daysAmount) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}


function daysBetween(date1, date2) {
	let diff;
	const oneMillisec = 1000;
	const oneSecMin = 60;
	const hours = 24;
	if (date1 > date2) {
		diff = date1.getTime() - date2.getTime();		
	} else {
		diff = date2.getTime() - date1.getTime();
	}
	let days = Math.round(diff / (oneMillisec * oneSecMin * oneSecMin * hours)); 
	return days;
}


function getAmountOfAdultPeople(data) {
	let currentDate = new Date().toUTCString();
	let age = new Array();
	let adultPeople = new Array();
	const year = 365;
	for (let i = 0; i < data.length; i++) {
		if (data[i].hasOwnProperty('birthday')) {
			age[i] = data[i].birthday;
		}
	}

	for (let i = 0; i < age.length; i++) {
		adultPeople[i] = daysBetween(new Date(currentDate), new Date(age[i]));	
		adultPeople[i] /= year;
		adultPeople[i] = Math.round(adultPeople[i]);
	}

	adultPeople = filterArray(adultPeople, filter);

	function filter(el) {
		const value = 18;
		return el > value;
	}

	console.log(adultPeople.length);
}


function keys(obj){
	let keysArray = new Array();
	let i = 0;
	for (let name in obj) {
		if (obj.hasOwnProperty(name)) {
			keysArray[i] = name;
			i++;
		}
	}
	return keysArray;
}


function values(obj){
	let valuesArray = new Array();
	let i = 0;
	for (let name in obj) {
		if (obj.hasOwnProperty(name)) {
			valuesArray[i] = obj[name];
			i++;
		}
	}
	return valuesArray;
}