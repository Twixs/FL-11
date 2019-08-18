function assign(dest, ...args){
	var destObject = dest;
	for (var i = 0; i < args.length; i++) {
		var sourceObject = args[i];
		for (var prop in sourceObject) {
			if (Object.prototype.hasOwnProperty.call(sourceObject, prop)){
				destObject[prop] = sourceObject[prop];
			}
		}
	}
	return destObject;
}

const defaults = { a: 123, b: 777 };
const options = { a: 456 };
const configs = assign({}, defaults, options);
console.log(configs);