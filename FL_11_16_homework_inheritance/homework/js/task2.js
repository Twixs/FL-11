function create(source){
	function TempObject() {}
	if (typeof source !== 'object') {
		throw TypeError('Source object prototype must be an Object');
	}

	TempObject.prototype = source;
	var resultObject = new TempObject();
	
	// handling of case when the second parameter was passed
	if (arguments.length > 1) {
		var sourceProperties = Object(arguments[1]);
		for (var prop in sourceProperties) {
			if (Object.prototype.hasOwnProperty.call(sourceProperties,prop)) {
				resultObject[prop] = sourceProperties[prop];
			}
		}
	}

	return resultObject;
}

const obj1 = { prop: 5 };
const obj2 = create(obj1);
console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop);

const obj3 = create(obj1, { smth: { value: 42 } });
console.log(obj3);